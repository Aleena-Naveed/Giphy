import React, { useState } from 'react';
import { useEffect } from 'react';
import fetch from 'cross-fetch';

const TGiff = () => {
    const [gifs, setGif] = useState([]);
    const temp = []

    useEffect(() => {
        const url = "http://api.giphy.com/v1/gifs/trending?api_key=ynEBIL0IuyPRz5Sgfoh8VyId08vBK8eg";
        const temp = []
        const fetchGifs = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setGif(json.data);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchGifs();
    }, []);

    return (
        gifs.map((el) => {
            return (
                <div key={el.id}>
                    <img src={el.images.fixed_height.url} />
                    <button onClick={() => {
                        if (!temp.includes(el.images.fixed_height.url))
                            temp.push(el.images.fixed_height.url)
                        console.log(temp)
                        temp.map((obj, index) => {
                            localStorage.setItem(index, obj)
                        })
                        console.log(localStorage)
                    }}>Like</button>
                </div >
            )
        })
    );
}



export default TGiff;