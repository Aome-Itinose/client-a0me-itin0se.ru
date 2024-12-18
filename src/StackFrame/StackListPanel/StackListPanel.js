import s from './StackListPanel.module.css';
import StackListItem from "./StackListItem/StackListItem";

import React from 'react';

function StackListPanel(props) {
    const handleItemClick = (index) => {
        props.setActiveElementIndex(index);
    }
    const pillStyles = () => {
        if (props.activeElementIndex !== null) {
            if (window.matchMedia("(max-width: 479px)").matches) {
                return {
                    top: `${props.activeElementIndex * 3.5}rem`
                }
            }
            return {
                top: `${props.activeElementIndex * 2.5}rem`
            }
        } else {
            return {
                hidden: "true"
            }
        }
    }

    let printErrorMessage = () => {
        return <h1 className={s.ErrorMessage}>{props.error.message}</h1>
    }

    let printTechnologies = () => {
        return <>
            <span className={`${s.pill} ${props.activeElementIndex !== null ? s.active : ''}`} aria-hidden={true}
                  style={pillStyles()}></span>
            {props.technologies.map((item, index) =>
                <StackListItem
                    key={index}
                    technologyName={item.shortName}
                    isActive={props.activeElementIndex === index}
                    onClick={() => handleItemClick(index)}/>
            )}
        </>
    }

    return (
        <div ref={props.innerRef} className={`${s.StackListPanel} ${props.activeElementIndex !== null ? s.active : ""}`}>
            {props.error == null ? printTechnologies() : printErrorMessage()}
        </div>
    );
}

export default StackListPanel;
