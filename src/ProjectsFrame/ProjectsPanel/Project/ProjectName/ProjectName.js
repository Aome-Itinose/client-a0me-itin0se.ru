import s from './ProjectName.module.css';

function ProjectName({projectName}) {
    return (
        <div className={s.ProjectName}>
          <p>{projectName}</p>
        </div>
    );
}

export default ProjectName;
