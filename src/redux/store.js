import { createStore, applyMiddleware } from "redux";
import { logger } from 'redux-logger';

import rootReducer from "./root-reducer";

// middleware have to be declared in an array
const middlewares = [logger];

// creating redux store to store state
const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;