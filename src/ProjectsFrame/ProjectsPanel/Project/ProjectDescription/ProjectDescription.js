import s from './ProjectDescription.module.css';

function ProjectDescription({projectDescription}) {
    return (
        <div className={s.ProjectDescription}>
          <p>{projectDescription}</p>
        </div>
    );
}

export default ProjectDescription;
