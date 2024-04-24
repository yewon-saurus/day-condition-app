import { combineReducers, createStore } from "redux";
import title from "./modules/title";

const rootReducer = combineReducers({
    "title": title,
});

const store = createStore(rootReducer);

export default store;