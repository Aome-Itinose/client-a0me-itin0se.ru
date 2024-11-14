import s from './StackItemInformation.module.css';

const StackItemInformation = ({innerRef, data, isActive}) => {
    return (
        <div className={s.Back}>
            <div ref={innerRef} className={`${s.StackItemInformation} ${isActive ? s.active : ""}`}>
                <p className={s.TechName}>{data.name}</p>
                <p className={s.TechDescription}>{data.description}</p>
            </div>
        </div>
    );
}

export default StackItemInformation;
