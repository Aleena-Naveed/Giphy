import { useState, useEffect, useCallback } from 'react'
import { Searchgif } from './Search'
import { Displaygif } from './Displaygif'
import fetch from "cross-fetch";
import React, { useContext } from "react";
import { HomeGifs } from '../../ContextStores/MainStore';
import debounce from 'lodash/debounce';
import axios from "axios";

const URL =
    "http://api.giphy.com/v1/gifs/trending?api_key=ynEBIL0IuyPRz5Sgfoh8VyId08vBK8eg";

const Main = () => {

    const limit = 25;
    const { text, setText, data, setData, toggle, setToggle, loading, setLoading, offset, setOffset } = useContext(HomeGifs);
    const URL_ = `${URL}&limit=${limit}&offset=${offset}&rating=g`



    const fetchGifs = useCallback(debounce(async (url) => {
        if (loading) return;
        setLoading(true)
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log('json.data', json?.data)
            setData((data) => [...data, ...json?.data])
        } catch (error) {
            console.log("error", error);
        }
        setLoading(false)
    }, 500), [])

    useEffect(() => {
        (() => {
            fetchGifs(URL_)
        })()
    }, [setToggle, offset])

    const loadMore = () => {
        setOffset((offset) => (offset + limit + 1));
    }
    useEffect(() => {
        setData([])
        setOffset(0)
    }, [setToggle])

    


    return <>
        <Searchgif />
        <Displaygif onScrollEnd={loadMore} />

    </>

}
export default Main;