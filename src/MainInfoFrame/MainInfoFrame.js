import s from './MainInfoFrame.module.css';
import MainCard from "./MainCard/MainCard";
import {useEffect} from "react";
import MainCardContainer from "./MainCard/MainCardContainer";
import Loading from "../util/Loading/Loading";

function MainInfoFrame(props) {
    useEffect(() => {
        props.fetchProfile();
    }, []);

    return (
        <div className={s.MainInfoFrame}>
            {
                props.loading ? <Loading/> : <MainCardContainer/>
            }
        </div>
    );
}

export default MainInfoFrame;
