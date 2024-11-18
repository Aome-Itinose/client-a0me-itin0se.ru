import s from './StackListPanel.module.css';
import StackListItem from "./StackListItem/StackListItem";

import React from 'react';

function StackListPanel({innerRef, stackList, activeElementIndex, setActiveElementIndex}) {


    const handleItemClick = (index) => {
        setActiveElementIndex(index);
    }

    const pillStyles = () => {
        if(activeElementIndex !== null) {
            if(window.matchMedia("(max-width: 479px)").matches) {
                return {
                    top: `${activeElementIndex * 3.5}rem`
                }
            }
            return {
                top: `${activeElementIndex * 2.5}rem`
            }
        }else{
            return {
                hidden: "true"
            }
        }
    }


    return (
        <div ref={innerRef} className={`${s.StackListPanel} ${activeElementIndex !== null ? s.active : ""}`}>
            <span className={`${s.pill} ${activeElementIndex !== null ? s.active : ''}`} aria-hidden={true} style={pillStyles()}></span>
            {stackList.map((item, index) =>
                <StackListItem
                    key={index}
                    stackItem={item}
                    isActive={activeElementIndex === index}
                    onClick={() => handleItemClick(index)} />
            )}
        </div>
    );
}

export default StackListPanel;
