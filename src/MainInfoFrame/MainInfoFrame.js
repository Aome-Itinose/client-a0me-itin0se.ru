import s from './MainInfoFrame.module.css';
import MainCard from "./MainCard/MainCard";

function MainInfoFrame(props) {
    return (
        <div className={s.MainInfoFrame}>
          <MainCard/>
        </div>
    );
}

export default MainInfoFrame;
