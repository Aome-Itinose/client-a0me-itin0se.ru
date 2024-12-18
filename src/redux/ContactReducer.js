const SET_CONTACTS = "SET_CONTACTS";
const ADD_CONTACTS = "ADD_CONTACTS";

let initialState = {
    contacts: [
        {title: "Telegram", iconFileName: "telegram.png", link: "https://t.me/Aome_Itinose"},
        {title: "Email", iconFileName: "email.png", link: "mailto:ky0bu@ya.ru"},
        {title: "HeadHunter", iconFileName: "hh.png", link: "https://kazan.hh.ru/resume/4e13fb2bff0c74e7ab0039ed1f434966387a6c"},
        {title: "GitHub", iconFileName: "github.png", link: "https://github.com/Aome-Itinose"},
        {title: "VK", iconFileName: "vk.png", link: "https://vk.com/id326414318"},
    ]
};
export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACTS:
            return {...state, contacts: action.contacts};
        case ADD_CONTACTS:
            return {...state, contacts: [...state.contacts, action.contact]};
        default:
            return {...state};
    }
}

export const setContacts = (contacts) => ({type: SET_CONTACTS, contacts: contacts});
export const addContact = (contact) => ({type: ADD_CONTACTS, contact: contact});