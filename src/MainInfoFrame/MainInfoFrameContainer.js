import {connect} from "react-redux";
import MainInfoFrame from "./MainInfoFrame";
import axios from "axios";
import {setImagePath, setProfile} from "../redux/ProfileReducer";

const fetchProfile = () => {
    return (dispatch) => {
        axios.get(`http://localhost:8080/profile`).then((response) => {
            let photoPath = response.data.photoPath;
            dispatch(setProfile(response.data));
            axios.get(`http://localhost:8080/profile/image?photoPath=${photoPath}`, {responseType: 'blob'}).then((response) => {
                let imageBlob = response.data;
                let some = URL.createObjectURL(imageBlob);
                dispatch(setImagePath(some));
            })        
        })

    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

const MainInfoFrameContainer = connect(mapStateToProps, {fetchProfile})(MainInfoFrame);

export default MainInfoFrameContainer;