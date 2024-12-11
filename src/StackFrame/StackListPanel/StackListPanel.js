import s from './StackListPanel.module.css';
import StackListItem from "./StackListItem/StackListItem";

import React from 'react';

function StackListPanel({innerRef, technologies, activeElementIndex, setActiveElementIndex, error, loading}) {
    const handleItemClick = (index) => {
        setActiveElementIndex(index);
    }
    const pillStyles = () => {
        if (activeElementIndex !== null) {
            if (window.matchMedia("(max-width: 479px)").matches) {
                return {
                    top: `${activeElementIndex * 3.5}rem`
                }
            }
            return {
                top: `${activeElementIndex * 2.5}rem`
            }
        } else {
            return {
                hidden: "true"
            }
        }
    }

    let printErrorMessage = () => {
        return <h1 className={s.ErrorMessage}>{error.message}</h1>
    }

    let printTechnologies = () => {
        return <>
            <span className={`${s.pill} ${activeElementIndex !== null ? s.active : ''}`} aria-hidden={true}
                  style={pillStyles()}></span>
            {technologies.map((item, index) =>
                <StackListItem
                    key={index}
                    technologyName={item.shortName}
                    isActive={activeElementIndex === index}
                    onClick={() => handleItemClick(index)}/>
            )}
        </>
    }

    return (
        <div ref={innerRef} className={`${s.StackListPanel} ${activeElementIndex !== null ? s.active : ""}`}>
            {error == null ? printTechnologies() : printErrorMessage()}
        </div>
    );
}

export default StackListPanel;
