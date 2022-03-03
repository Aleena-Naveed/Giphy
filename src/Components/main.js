import { useState, useEffect } from 'react'
import { Searchgif } from './Search'
import { Displaygif } from './Displaygif'
import fetch from "cross-fetch";
import axios from "axios";

const Main = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const [liked, setLiked] = useState([]);

    useEffect(() => {
        const likedIds = JSON.parse(localStorage.getItem("likedArray"));
        setLiked(likedIds);

    }, [])

    useEffect(() => {
        const list = JSON.stringify(liked);
        return (localStorage.setItem("likedArray", list));

    }, [liked])

    useEffect(() => {
        const url =
            "http://api.giphy.com/v1/gifs/trending?api_key=ynEBIL0IuyPRz5Sgfoh8VyId08vBK8eg";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log("json.data.data)", json.data);
                setData((data) => [...data, ...json?.data])
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const results = await axios("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "ynEBIL0IuyPRz5Sgfoh8VyId08vBK8eg",
                    q: text,
                },
            });
            console.log("results.data.data", results.data.data);
            setData([]);
            setData((data) => [...data, ...results?.data?.data]);
            setText("");

        } catch (error) {
            console.log("error", error);
        }
    };

    return <>
        <Searchgif text={text} setText={setText} data={data} setData={data} liked={liked} setLiked={setLiked} onClick={handleSubmit} />
        <Displaygif data={data} setData={setData} liked={liked} setLiked={setLiked} />
    </>

}
export default Main;