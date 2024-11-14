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
        "iure quod repellendus? A ab dolore eius, eligendi eos eum excepturi facere illum in, numquam rerum unde."
}

function MainCard(props) {
    return (
        <div className={s.MainCard}>
            <div className={s.ProfileCard}>
                <FullName fullName={me.fullName} />
                <Image imageSrc={me.imageSrc} />
            </div>
            <Text text={me.text} />
            <div className={s.mask}></div>
        </div>
    );
}

export default MainCard;
