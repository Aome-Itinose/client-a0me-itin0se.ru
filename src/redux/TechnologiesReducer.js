const SET_TECHNOLOGIES = "SET_TECHNOLOGIES";
const SET_LOADING = "SET_LOADING";
const SET_ERROR = "SET_ERROR";

const initialState = {
    technologies: [],
    loading: false,
    error: null
}

export const technologiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TECHNOLOGIES:
            let newState = {...state, technologies: []};
            action.technologies.forEach(technology => {
                newState.technologies.push({id: technology.id, fullName: technology.fullName, shortName: technology.shortName, description: technology.description});
            })
            return newState;
        case SET_LOADING:
            return {...state, loading: action.loading};
        case SET_ERROR:
            return {...state, error: {status: action.status, message: action.message}};
        default:
            return state;
    }
}

export const setTechnologies = (technologies) => ({type: SET_TECHNOLOGIES, technologies: technologies});
export const setLoading = (loading) => ({type: SET_LOADING, loading});
export const setError = (status, message) => ({type: SET_ERROR, status, message});