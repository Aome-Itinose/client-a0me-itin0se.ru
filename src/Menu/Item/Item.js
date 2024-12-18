import s from './Item.module.css';
import {NavLink} from 'react-router-dom';

function Item({menuItem, onClick, isActive}) {
    return (
        <div className={`${s.Item} ${isActive ? s.active : ''}`} onClick={onClick}>
            <span className={s.pill} aria-hidden={true}></span>
            <NavLink to={menuItem.to} className={s.itemLink}>
                {menuItem.text}
            </NavLink>
        </div>
    );
}

export default Item;
