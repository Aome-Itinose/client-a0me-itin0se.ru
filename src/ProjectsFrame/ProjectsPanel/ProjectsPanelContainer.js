import ProjectsPanel from "./ProjectsPanel";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        projects: state.projectsPage.projects,
        error: state.projectsPage.error
    }
}

const ProjectsPanelContainer = connect(mapStateToProps, null)(ProjectsPanel);
export default ProjectsPanelContainer;