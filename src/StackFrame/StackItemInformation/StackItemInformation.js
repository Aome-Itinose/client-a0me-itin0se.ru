import s from './StackItemInformation.module.css';

const StackItemInformation = (props) => {
    return (
        <div className={s.Back}>
            <div ref={props.innerRef} className={`${s.StackItemInformation} ${props.isActive ? s.active : ""}`}>
                <p className={s.TechName}>{props.technology.fullName}</p>
                <p className={s.TechDescription}>{props.technology.description}</p>
            </div>
        </div>
    );
}

export default StackItemInformation;
