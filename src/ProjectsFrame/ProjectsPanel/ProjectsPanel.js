import s from './ProjectsPanel.module.css';
import Project from "./Project/Project";

function ProjectsPanel(props) {

    let printErrorMessage = () => {
        return <h1 className={s.ErrorMessage}>{props.error.message}</h1>
    }
    let printProjects = () => {
        return <>
            {
                props.projects.map((project, ind) => {
                    return <Project key={ind} project={project}/>
                })
            }
        </>
    }

    return (
        <div className={s.ProjectsPanel}>
            {props.error == null ? printProjects() : printErrorMessage()}
        </div>
    );
}

export default ProjectsPanel;
