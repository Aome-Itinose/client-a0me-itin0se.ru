import s from './Menu.module.css';
import Item from './Item/Item';
import React from "react";

const menuItems = [
    { to: '/profile', text: 'Профиль' },
    { to: '/stack', text: 'Стек' },
    { to: '/projects', text: 'Проекты' },
    { to: '/contact', text: 'Связь' },
];

function Menu(props) {
    const [activeElementIndex, setActiveElementIndex] = React.useState(0);

    const pillStyle = {
        left: `${activeElementIndex * 8.26}rem` // Умножаем индекс на ширину одного элемента
    };


    return (
        <header className={s.Menu}>
            {menuItems.map((item, index) => (
                <Item
                    key={index}
                    to={item.to}
                    text={item.text}
                    onClick={() => setActiveElementIndex(index)}
                    isActive={index === activeElementIndex}/>
            ))}
            <span className={s.pill} style={pillStyle}></span>
        </header>
    );
}


export default Menu;
