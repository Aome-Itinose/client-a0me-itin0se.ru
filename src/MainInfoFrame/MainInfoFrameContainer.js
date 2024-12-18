import {connect} from "react-redux";
import MainInfoFrame from "./MainInfoFrame";
import axios from "axios";
import {setError, setImagePath, setLoading, setProfile} from "../redux/ProfileReducer";
import config from "../config";

const fetchProfile = () => {
    return (dispatch) => {
        dispatch(setLoading(true));
        axios.get(`${config.API_BASE_URL}/profile`).then((response) => {
            let photoPath = response.data.photoPath;
            dispatch(setProfile(response.data));
            axios.get(`${config.API_BASE_URL}/profile/image?photoPath=${photoPath}`, {responseType: 'blob'}).then((response) => {
                let imageBlob = response.data;
                let some = URL.createObjectURL(imageBlob);
                dispatch(setImagePath(some));
            }).catch((error) => {
                dispatch(setError(error.status, error.response.data.message));
            })
        }).catch((error) => {
            dispatch(setError(error.status, error.response.data.message));
        }).finally(() => {
            dispatch(setLoading(false));
        })

    }
}

let mapStateToProps = (state) => {
    return {
        loading: state.profilePage.loading,
    }
}

const MainInfoFrameContainer = connect(mapStateToProps, {fetchProfile})(MainInfoFrame);

export default MainInfoFrameContainer;