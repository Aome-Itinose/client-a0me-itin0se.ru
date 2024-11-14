import s from './StackListPanel.module.css';
import StackListItem from "./StackListItem/StackListItem";

function StackListPanel({innerRef, stackList, activeElementIndex, setActiveElementIndex}) {

    const handleItemClick = (index) => {
        setActiveElementIndex(index);
    }

    return (
        <div ref={innerRef} className={`${s.StackListPanel} ${activeElementIndex !== null ? s.active : ""}`}>
            {stackList.map((item, index) =>
                <StackListItem
                    stackItem={item}
                    isActive={activeElementIndex === index}
                    onClick={() => handleItemClick(index)} />
            )}
        </div>
    );
}

export default StackListPanel;
