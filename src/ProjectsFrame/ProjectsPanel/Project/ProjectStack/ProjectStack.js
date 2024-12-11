import s from './ProjectStack.module.css';

function ProjectStack({projectStackList}) {
    const stackList = projectStackList.map((technology, ind) => <li key={ind} className={s.StackListItem}>{technology}</li>);
    return (
        <div className={s.ProjectStack}>
            <ul className={s.StackList}>
                {stackList}
            </ul>
        </div>
    );
}

export default ProjectStack;
