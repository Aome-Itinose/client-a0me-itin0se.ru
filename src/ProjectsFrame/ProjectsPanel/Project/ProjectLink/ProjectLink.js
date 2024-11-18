import s from './ProjectLink.module.css';

function ProjectLink({projectLink}) {
    return (
        <div className={s.ProjectLink}>
            <a href={projectLink} target={'_blank'}>
                <img src="./GitHub1.svg" alt=""/>
                <p>GitHub</p>
            </a>
        </div>
    );
}

export default ProjectLink;
