import s from './Loading.module.css';

const Loading = (props) => {
    return (
        <div className={s.Loading}>
            <img className={s.LoadingImage} src={"./bouncing-circles.svg"} alt={""}></img>
        </div>
    );
}

export default Loading;
