import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {projectsReducer} from "./ProjectsReducer";
import {thunk} from "redux-thunk";
import {technologiesReducer} from "./TechnologiesReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    projectsPage: projectsReducer,
    technologiesPage: technologiesReducer,
})

export let store = createStore(reducers, applyMiddleware(thunk));



