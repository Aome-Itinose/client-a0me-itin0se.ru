const ADD_PROJECT = 'ADD_PROJECT';
const SET_PROJECTS = 'SET_PROJECTS';
const SET_ERROR  = 'SET_ERROR';
const SET_LOADING = 'SET_LOADING';

const initialState = {
    projects: [],
    error: null,
    loading: false,
}
export const projectsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_PROJECTS:
            newState = {...state, projects: []};
            // console.log(action.projects)
            action.projects.forEach(project => {
                newState.projects.push({
                    id: project.id, name: project.name, description: project.description,
                    gitHubLink: project.gitHubLink, technologies: [...project.technologies], timestamp: project.timestamp
                });
            })
            return newState;
        case ADD_PROJECT:
            newState = {...state};
            newState.projects.push({
                projectId: action.payload.id, name: action.payload.name, description: action.payload.description,
                gitHubLink: action.payload.gitHubLink, technologies: [...action.payload.technologies], timestamp: action.payload.timestamp
            });
            return newState;
        case SET_ERROR:
            return {...state, error: {status: action.status, message: action.message}};
        case SET_LOADING:
            return {...state, loading: action.loading};
        default:
            return state;
    }
}

export const setProjects = (projects) => ({type: SET_PROJECTS, projects: projects});
export const addProject = (project) => ({type: ADD_PROJECT, payload: project});
export const setError = (status, message) => ({type: SET_ERROR, status, message});
export const setLoading = (loading) => ({type: SET_LOADING, loading});