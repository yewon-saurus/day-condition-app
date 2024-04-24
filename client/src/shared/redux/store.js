import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import title from "./modules/title";
import condition from "./modules/condition";

const rootReducer = combineReducers({
    "title": title,
    "condition": condition,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

export default store;