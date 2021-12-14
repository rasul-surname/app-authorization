import formReducer from "./form-reducer";
import langReducer from "./lang-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

let reducers = combineReducers({
    formPage: formReducer,
    languages: langReducer,
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;