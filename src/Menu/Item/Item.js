import s from './Item.module.css';
import {NavLink} from 'react-router-dom';

function Item({to, text, onClick, isActive}) {
    return (
        <div className={`${s.Item} ${isActive ? s.active : ''}`} onClick={onClick}>
            <span className={s.pill} aria-hidden={true}></span>
            <NavLink to={to} className={s.itemLink}>
                {text}
            </NavLink>
        </div>
    );
}

export default Item;
