import s from './StackItemInformation.module.css';

const StackItemInformation = ({innerRef, technology, isActive}) => {
    // console.log(technology);
    return (
        <div className={s.Back}>
            <div ref={innerRef} className={`${s.StackItemInformation} ${isActive ? s.active : ""}`}>
                <p className={s.TechName}>{technology.fullName}</p>
                <p className={s.TechDescription}>{technology.description}</p>
            </div>
        </div>
    );
}

export default StackItemInformation;
