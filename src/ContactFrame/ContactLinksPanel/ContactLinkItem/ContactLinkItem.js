import s from './ContactLinkItem.module.css';

const ContactLinkItem = ({linkDetails}) => {
    return (
        <div className={s.ContactLinkItem}>
            <img src={`./${linkDetails.iconFileName}`} alt={""}></img>
            <a href={linkDetails.link} target={"_blank"}>{linkDetails.title}</a>
            <span className={s.pill} aria-hidden={true}></span>
        </div>
    );
}

export default ContactLinkItem;
