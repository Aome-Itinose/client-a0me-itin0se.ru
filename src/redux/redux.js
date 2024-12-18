import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {projectsReducer} from "./ProjectsReducer";
import {thunk} from "redux-thunk";
import {technologiesReducer} from "./TechnologiesReducer";
import {contactReducer} from "./ContactReducer";
import {menuReducer} from "./MenuReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    projectsPage: projectsReducer,
    technologiesPage: technologiesReducer,
    contactsPage: contactReducer,
    menu: menuReducer,
})

export let store = createStore(reducers, applyMiddleware(thunk));



