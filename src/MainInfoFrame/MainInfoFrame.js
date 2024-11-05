import s from './MainInfoFrame.module.css';
import Menu from "../Menu/Menu";
import Content from "./Content/Content";

function MainInfoFrame(props) {
    return (
        <div className={s.MainInfoFrame}>
          <Menu/>
          <Content/>
        </div>
    );
}

export default MainInfoFrame;
