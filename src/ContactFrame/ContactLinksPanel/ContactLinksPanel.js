import s from './ContactLinksPanel.module.css';
import ContactLinkItem from "./ContactLinkItem/ContactLinkItem";
import {useState} from "react";

const ContactLinksPanel = ({links}) => {
    return (
        <div className={s.ContactLinksPanel}>
            {links.map((link, index) => (
                <ContactLinkItem key={index} linkDetails={link} />
            ))}
        </div>
    );
}

export default ContactLinksPanel;
