const SET_PROFILE = "SET_PROFILE";
const SET_IMAGE = "SET_IMAGE";

let initialState = {
    profile: {
        fullName: "",
        aboutMe: "",
        imagePath: ""
    }
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {...state, profile: {...action.payload}}
        case SET_IMAGE:
            return {...state, profile: {...state.profile, imagePath: action.imagePath}}
        default:
            return {...state};
    }
}

export const setProfile = (profile) => ({type: SET_PROFILE, payload: profile});
export const setImagePath = (imagePath) => ({type: SET_IMAGE, imagePath: imagePath});
