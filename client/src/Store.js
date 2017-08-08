import {compose, createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import {routerMiddleware} from 'react-router-redux'
import {hashHistory} from "react-router";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const createAppStore = compose(
        applyMiddleware(promise(), logger(), sagaMiddleware,routerMiddleware(hashHistory)),
        window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

export default createAppStore(rootReducer);

sagaMiddleware.run(rootSaga);