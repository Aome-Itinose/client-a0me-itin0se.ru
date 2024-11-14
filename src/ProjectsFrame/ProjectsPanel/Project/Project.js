import s from './Project.module.css';
import ProjectName from "./ProjectName/ProjectName";
import ProjectLink from "./ProjectLink/ProjectLink";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import ProjectStack from "./ProjectStack/ProjectStack";

function Project({projectData}) {
    return (
        <div className={s.Project}>
            <ProjectName projectName={projectData.name}/>
            <ProjectLink projectLink={projectData.link}/>
            <ProjectStack projectStackList={projectData.stack}/>
            <ProjectDescription projectDescription={projectData.description}/>

        </div>
    );
}

export default Project;
