import StackFrame from "./StackFrame";
import {connect} from "react-redux";
import axios from "axios";
import {setError, setLoading, setTechnologies} from "../redux/TechnologiesReducer";
import config from "../config";

let fetchTechnologies = () => {
    return (dispatch) => {
        dispatch(setLoading(true));
        axios.get(`${config.API_BASE_URL}/technologies`).then((response) => {
            // console.log(response.data);
            dispatch(setTechnologies(response.data));
        }).catch((error) => {
            dispatch(setError(error.status, error.response.data.message));
        }).finally(() => {
            dispatch(setLoading(false));
        })
    }
}

let mapStateToProps = (state) => {
    // console.log("mapStateToProps");
    return {
        technologies: state.technologiesPage.technologies,
        loading: state.technologiesPage.loading,
        error: state.technologiesPage.error,
    }
}

const StackFrameContainer = connect(mapStateToProps, {fetchTechnologies})(StackFrame);
export default StackFrameContainer;