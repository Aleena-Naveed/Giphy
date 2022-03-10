import { useState, useEffect, useCallback } from 'react'
import { Searchgif } from './Search'
import { Displaygif } from './Displaygif'
import fetch from "cross-fetch";
import axios from "axios";
import React, { useContext } from "react";
import { HomeGifs } from '../../ContextStores/MainStore';
import debounce from 'lodash/debounce'

const URL =
    "http://api.giphy.com/v1/gifs/trending?api_key=ynEBIL0IuyPRz5Sgfoh8VyId08vBK8eg";

const Main = () => {

    const limit = 25;
    const { text, setText, data, setData, toggle, setToggle, loading, setLoading, offset, setOffset } = useContext(HomeGifs);
    const URL_ = `${URL}&limit=${limit}&offset=${offset}&rating=g`

    const fetchGifs = useCallback(debounce(async () => {
        if (loading) return;
        setLoading(true)
        try {
            const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key: "ynEBIL0IuyPRz5Sgfoh8VyId08vBK8eg",
                    limit: limit,
                    offset: offset,
                    rating: 'g'
                },
            });
            console.log("results.data.data", results.data.data);
            setData((data) => [...data, ...results?.data?.data]);

        } catch (error) {
            console.log("error", error);
        }
        setLoading(false)
    }, 500), [])
    
    useEffect(() => {
        (() => {
            fetchGifs()
        })()
    }, [setToggle, offset])

    const loadMore = () => setOffset((offset) => offset + limit + 1)

    // useEffect(() => {
    //     const url =
    //         "http://api.giphy.com/v1/gifs/trending?api_key=ynEBIL0IuyPRz5Sgfoh8VyId08vBK8eg";

    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url);
    //             const json = await response.json();
    //             console.log('json', json)
    //             console.log('json.data', json?.data)
    //             setData((data) => [...data, ...json?.data])
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     };
    //     fetchData();
    // }, [setToggle]);



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
        <Displaygif onScrollEnd={loadMore} />

    </>

}
export default Main;