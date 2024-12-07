import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {projectsReducer} from "./ProjectsReducer";
import {thunk} from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    projectsPage: projectsReducer,
})

export let store = createStore(reducers, applyMiddleware(thunk));



