// import React, { createContext } from "react";
// import { useState, useEffect } from 'react';
import { Likedgifs } from '../Pages/likedGifs';
import Home from '../Pages/Home';
import { LikeProvider } from '../ContextStores/LikeStore';
import DetailGif  from '../Pages/GifDetails';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

// const Gifs = createContext();

export default function Routes() {
    const history = useHistory();

    return (
        <Router history={history}>
            <LikeProvider>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/liked">
                        <Likedgifs />
                    </Route>

                    <Route path="/details">
                        <DetailGif />
                    </Route>

                </Switch>
            </LikeProvider>

        </Router>
    )
}