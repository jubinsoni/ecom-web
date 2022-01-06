import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import { logger } from 'redux-logger';

import rootReducer from "./root-reducer";

// middleware have to be declared in an array
const middlewares = [logger];

// creating redux store to store state
export const store = createStore(rootReducer,applyMiddleware(...middlewares));
export const persistor = persistStore(store);