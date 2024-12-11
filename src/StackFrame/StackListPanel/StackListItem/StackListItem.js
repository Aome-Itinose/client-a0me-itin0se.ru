import s from './StackListItem.module.css';
import {NavLink} from "react-router-dom";

function StackListItem({technologyName, isActive, onClick}) {
    return (
        <div className={`${s.StackListItem} ${isActive ? s.active : ''}`} onClick={onClick}>
            <span className={s.pill} aria-hidden={true}></span>
            <NavLink to={``} className={s.link}>
                {technologyName}
            </NavLink>
        </div>
    );
}

export default StackListItem;
