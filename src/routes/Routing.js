// import React, { createContext } from "react";
// import { useState, useEffect } from 'react';
import { Likedgifs } from '../Components/likedGifs';
import { Filtergifs } from '../Components/filteredGifs';
import Main from '../Components/main';
import { Gifs } from '../store/store';
import { AppProvider } from '../store/store';

import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

// const Gifs = createContext();

export default function Routes() {
    const history = useHistory();

    // const [text, setText] = useState("");
    // const [data, setData] = useState([]);
    // const [liked, setLiked] = useState([]);

    // useEffect(() => {
    //     const likedIds = JSON.parse(localStorage.getItem("likedArray"));
    //     setLiked(likedIds);

    // }, [])

    // useEffect(() => {
    //     const list = JSON.stringify(liked);
    //     return (localStorage.setItem("likedArray", list));

    // }, [liked])

    return (
        <Router history={history}>

            <AppProvider>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>

                    <Route path="/liked">
                        <Likedgifs />
                    </Route>

                    <Route path="/filtered">
                        <Filtergifs />
                    </Route>
                </Switch>
            </AppProvider>

        </Router>
    )
}