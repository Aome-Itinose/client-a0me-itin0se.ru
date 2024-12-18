import {connect} from "react-redux";
import ProjectsFrame from "./ProjectsFrame";
import config from "../config";
import axios from "axios";
import {setError, setLoading, setProjects} from "../redux/ProjectsReducer";

let fetchProjects = () => {
    return (dispatch) => {
        dispatch(setLoading(true));
        axios.get(`${config.API_BASE_URL}/projects`).then((response) => {
            dispatch(setProjects(response.data));
        }).catch((error) => {
            dispatch(setError(error.status, error.response.data.message));
        }).finally(() => {
            dispatch(setLoading(false));
        })
    }
}

let mapStateToProps = (state) => {
    return {
        loading: state.projectsPage.loading,
    }
}

const ProjectsFrameContainer = connect(mapStateToProps, {fetchProjects})(ProjectsFrame);
export default ProjectsFrameContainer;