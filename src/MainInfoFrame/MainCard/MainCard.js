import s from './MainCard.module.css';
import Text from './Text/Text';
import FullName from "./FullName/FullName";
import Image from "./Image/Image";

function MainCard(props) {

    let printErrorMessage = () => {
        return <h1 className={s.ErrorMessage}>{props.error.message}</h1>
    }
    let printMainCard = () => {
        return <>
            <div className={s.ProfileCard}>
                <FullName fullName={props.fullName}/>
                <Image imageSrc={props.imagePath}/>
            </div>
            <Text text={props.aboutMe}/>
            <div className={s.mask}></div>
        </>
    }
    return (
        <div className={s.MainCard}>
            {props.error == null ? printMainCard() : printErrorMessage()}
        </div>
    );
}

export default MainCard;
