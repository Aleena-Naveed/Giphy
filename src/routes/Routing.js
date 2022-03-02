import React from "react";

import { Likedgifs } from '../Components/likedGifs';
import { Filtergifs } from '../Components/filteredGifs';
import Main from '../Components/main';

import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';

export default function Routes() {
    const history = useHistory();
    return (
        <Router history={history}>
            <switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/liked">
                    <Likedgifs />
                </Route>

                <Route path="/filtered">
                    <Filtergifs />
                </Route>
            </switch>
        </Router>
)
}