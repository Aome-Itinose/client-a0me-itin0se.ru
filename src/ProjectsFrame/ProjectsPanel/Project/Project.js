import s from './Project.module.css';
import ProjectName from "./ProjectName/ProjectName";
import ProjectLink from "./ProjectLink/ProjectLink";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import ProjectStack from "./ProjectStack/ProjectStack";

function Project({project}) {
    // console.log(project)
    // debugger
    return (
        <div className={s.Project}>
            <ProjectName projectName={project.name}/>
            <ProjectLink projectLink={project.gitHubLink}/>
            <ProjectStack projectStackList={project.technologies}/>
            <ProjectDescription projectDescription={project.description}/>

        </div>
    );
}

export default Project;
