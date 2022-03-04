import React, { createContext } from "react";
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Gifs = createContext();

export const AppProvider = ({ children }) => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const [liked, setLiked] = useState([]);

    const location = useLocation();

    useEffect(() => {
        const likedIds = JSON.parse(localStorage.getItem("likedArray"));
        setLiked(likedIds);

    }, [])

    useEffect(() => {
        const list = JSON.stringify(liked);
        return (localStorage.setItem("likedArray", list));

    }, [liked])

    return (
        <Gifs.Provider
            value={{
                text,
                setText,
                data,
                setData,
                liked,
                setLiked
            }}>
            {children}
        </Gifs.Provider>
    )
}

export { Gifs };