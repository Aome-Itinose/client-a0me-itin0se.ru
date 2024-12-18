import s from './ContactLinksPanel.module.css';
import ContactLinkItem from "./ContactLinkItem/ContactLinkItem";

const ContactLinksPanel = (props) => {
    return (
        <div className={s.ContactLinksPanel}>
            {props.contacts.map((item, index) => (
                <ContactLinkItem key={index} linkDetails={item} />
            ))}
        </div>
    );
}

export default ContactLinksPanel;
