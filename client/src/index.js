import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, hashHistory} from "react-router";
import {syncHistoryWithStore, routerReducer} from "react-router-redux";
import App from "./App";
import Register from "./Register";
import store from "./Store";
import "./App.css";

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Register}/>
        </Router>
    </ Provider >
), document.getElementById('app'));