import {connect} from "react-redux";
import ContactLinksPanel from "./ContactLinksPanel";

let mapStateToProps = (state) => {
    return {
        contacts: state.contactsPage.contacts,
    }
}

const ContactLinksPanelContainer = connect(mapStateToProps, null)(ContactLinksPanel);
export default ContactLinksPanelContainer;