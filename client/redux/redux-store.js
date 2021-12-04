import formReducer from "./form-reducer";
import langReducer from "./lang-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    formPage: formReducer,
    languages: langReducer,
})

let store = createStore(reducers);

export default store;