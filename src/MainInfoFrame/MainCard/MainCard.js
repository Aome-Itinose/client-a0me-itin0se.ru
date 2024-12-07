import s from './MainCard.module.css';
import Text from './Text/Text';
import FullName from "./FullName/FullName";
import Image from "./Image/Image";

const me = {
    fullName: "Залялиев Камиль Рамилевич",
    imageSrc: "./clo.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque corporis delectus doloribus est et eveniet explicabo " +
        "fuga id, impedit ipsum laboriosam magni officiis porro provident qui ratione, rem repellat!" +
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid consequatur dicta dolor eligendi excepturi fugit id " +
        "iure laudantium libero, magni maiores odio recusandae? Corporis deserunt eum excepturi fuga impedit. Adipisci at deserunt et minus " +
        "necessitatibus neque rerum sapiente vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa et expedita fugiat, " +
        "iure quod repellendus? A ab dolore eius, eligendi eos eum excepturi facere illum in, numquam rerum unde.",
    newText: "<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea laborum mollitia nemo voluptatum. At consequuntur dignissimos enim eveniet itaque laudantium magnam minima natus nisi qui, tempora totam? Alias ea minima possimus tenetur vel? Est ex inventore libero nemo possimus, quae, quam, quibusdam quod ratione repellendus totam veniam voluptatibus voluptatum! Adipisci cupiditate error est ex magni modi neque quibusdam, repellendus!</b>"
}

function MainCard(props) {
    return (
        <div className={s.MainCard}>
            <div className={s.ProfileCard}>
                <FullName fullName={props.fullName} />
                <Image imageSrc={props.imagePath} />
            </div>
            <Text text={props.aboutMe} />
            <div className={s.mask}></div>
        </div>
    );
}

export default MainCard;
