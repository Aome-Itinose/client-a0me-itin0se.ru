import s from './Menu.module.css';
import Item from './Item/Item';
import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";

function Menu(props) {
    const [activeItemIndex, setActiveItemIndex] = React.useState(0);
    const location = useLocation();


    useEffect(() => {
        if(location.pathname === '/') {
            setActiveItemIndex(0);
            props.setActiveItem("/profile");
        }else {
            setActiveItemIndex(props.menuItems.findIndex(item => item.to === props.activeItem));
            props.setActiveItem(location.pathname);
        }
    }, [props.activeItem, props.menuItems]);

    let setActiveItem = (item, index) => {
        props.setActiveItem(item.to);
        setActiveItemIndex(index);
    }

    const pillStyle = {
        left: `${activeItemIndex * 8.26}rem` // Умножаем индекс на ширину одного элемента
    };

    return (
        <header className={s.Menu}>
            {props.menuItems.map((item, index) => (
                <Item
                    key={index}
                    menuItem={item}
                    onClick={() => setActiveItem(item, index)}
                    isActive={item.to === props.activeItem}/>
            ))}
            <span className={s.pill} style={pillStyle}></span>
        </header>
    );
}


export default Menu;
