import formReducer from "./form-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    formPage: formReducer,
})

let store = createStore(reducers);

export default store;