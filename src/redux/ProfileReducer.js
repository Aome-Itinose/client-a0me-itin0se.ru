const SET_PROFILE = "SET_PROFILE";
const SET_IMAGE = "SET_IMAGE";
const SET_ERROR = "SET_ERROR";
const SET_LOADING = "SET_LOADING";

let initialState = {
    profile: {
        fullName: "",
        aboutMe: "",
        imagePath: ""
    },
    error: null,
    loading: false,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {...state, profile: {...action.payload}}
        case SET_IMAGE:
            return {...state, profile: {...state.profile, imagePath: action.imagePath}}
        case SET_ERROR:
            return {...state, error: {status: action.status, message: action.message}}
        case SET_LOADING:
            return {...state, loading: action.loading}
        default:
            return {...state};
    }
}

export const setProfile = (profile) => ({type: SET_PROFILE, payload: profile});
export const setImagePath = (imagePath) => ({type: SET_IMAGE, imagePath: imagePath});
export const setError = (status, message) => ({type: SET_ERROR, status: status, message: message});
export const setLoading = (loading) => ({type: SET_LOADING, loading: loading});

