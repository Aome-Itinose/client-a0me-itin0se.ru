import s from './MainInfoFrame.module.css';
import MainCard from "./MainCard/MainCard";
import {useEffect} from "react";
import MainCardContainer from "./MainCard/MainCardContainer";

function MainInfoFrame(props) {
    useEffect(() => {
        props.fetchProfile();
    }, []);

    return (
        <div className={s.MainInfoFrame}>
          <MainCardContainer/>
        </div>
    );
}

export default MainInfoFrame;
