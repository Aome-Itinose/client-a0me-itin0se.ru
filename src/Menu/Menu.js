import s from './Menu.module.css';
import Item from './Item/Item';
import React from "react";

function Menu(props) {
    return (
        <header className={s.Menu}>
            <Item to="/profile" text="Профиль"/>
            <Item to="/stack" text="Стек"/>
            <Item to="/projects" text="Проекты"/>
            <Item to="/connect" text="Связь"/>
        </header>
    );
}


export default Menu;
