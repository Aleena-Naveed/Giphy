import React, { createContext } from "react";
import { useState, useEffect } from 'react';

const HomeGifs = createContext();

const MainProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [text, setText] = useState("");
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = React.useState("");
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    
    return (
        <HomeGifs.Provider
            value={{
                text,
                setText,
                data,
                setData,
                toggle,
                setToggle,
                value,
                setValue,
                loading,
                setLoading,
                offset,
                setOffset
            }}>
            {children}
        </HomeGifs.Provider>
    )
}

export default MainProvider;
export { HomeGifs };
