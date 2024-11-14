import s from './ProjectStack.module.css';

function ProjectStack({projectStackList}) {
    const stackList = projectStackList.map((stack) => <li className={s.StackListItem}>{stack}</li>);
    return (
        <div className={s.ProjectStack}>
            <ul className={s.StackList}>
                {stackList}
            </ul>
        </div>
    );
}

export default ProjectStack;
