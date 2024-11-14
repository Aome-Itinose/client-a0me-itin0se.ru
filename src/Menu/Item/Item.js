import s from './Item.module.css';
import {NavLink} from 'react-router-dom';

function Item(props) {
    return (
        <div className={s.Item}>
            <span className={s.pill} aria-hidden={true}></span>
            <NavLink to={props.to} className={s.itemLink}>
                {props.text}
            </NavLink>
        </div>
    );
}

export default Item;
