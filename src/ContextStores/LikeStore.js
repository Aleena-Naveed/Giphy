import React, { createContext } from "react";
import { useState, useEffect } from 'react';

const LikedGifs = createContext();

export const LikeProvider = ({ children }) => {

    const [liked, setLiked] = useState([]);

    useEffect(() => {
        const likedIds = JSON.parse(localStorage.getItem("likedArray"));
        setLiked(likedIds);

    }, [])

    useEffect(() => {
        const list = JSON.stringify(liked);
        return (localStorage.setItem("likedArray", list));

    }, [liked])

    return (
        <LikedGifs.Provider
            value={{
                liked,
                setLiked,
            }}>
            {children}
        </LikedGifs.Provider>
    )
}

export { LikedGifs };