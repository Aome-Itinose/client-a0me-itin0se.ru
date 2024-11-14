import s from './StackListItem.module.css';
import {NavLink} from "react-router-dom";

function StackListItem({stackItem, isActive, onClick}) {
    return (
        <div className={`${s.StackListItem} ${isActive ? s.active : ''}`} onClick={onClick}>
            <span className={s.pill} aria-hidden={true}></span>
            <NavLink to={``} className={s.link}>
                {stackItem.name}
            </NavLink>
        </div>
    );
}

export default StackListItem;
