const ADD_PROJECT = 'ADD_PROJECT';

const initialState = {
    projects: []
}
export const ProjectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT:
            return {...state, projects: [...state.projects, ...action.payload]};
        default:
            return state;
    }
}

export const addProject = (project) => ({type: ADD_PROJECT, payload: project});