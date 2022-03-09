import { useState, useEffect } from 'react'
import { Searchgif } from './Search'
import { Displaygif } from './Displaygif'
import fetch from "cross-fetch";
import axios from "axios";
import React, { useContext } from "react";
import { HomeGifs } from '../../ContextStores/MainStore';


const Main = () => {
    const { text, setText, data, setData, toggle, setToggle } = useContext(HomeGifs);


    useEffect(() => {
        const url =
            "http://api.giphy.com/v1/gifs/trending?api_key=ynEBIL0IuyPRz5Sgfoh8VyId08vBK8eg";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log('json.data', json?.data)
                setData((data) => [...data, ...json?.data])
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [setToggle]);



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
        <Searchgif onClick={handleSubmit} />
        <Displaygif />

    </>

}
export default Main;