const SET_MENU_ITEMS = "SET_MENU_ITEMS";
const ADD_MENU_ITEM = "ADD_MENU_ITEM";
const SET_ACTIVE_ITEM = "SET_ACTIVE_ITEM";

let initialState = {
    menuItems: [
        { to: '/profile', text: 'Профиль' },
        { to: '/stack', text: 'Стек' },
        { to: '/projects', text: 'Проекты' },
        { to: '/contact', text: 'Связь' },
    ],
    activeItem: "/",
}

export let menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENU_ITEMS:
            return {...state, menuItems: action.menuItems};
        case ADD_MENU_ITEM:
            return {...state, menuItems: [...state.menuItems, action.menuItem]};
        case SET_ACTIVE_ITEM:
            return {...state, activeItem: action.activeItem};
        default:
            return {...state};
    }
}

export const setMenuItems = (menuItems) => ({type: SET_MENU_ITEMS, menuItems: menuItems});
export const addMenuItem = (menuItem) => ({type: ADD_MENU_ITEM, menuItem: menuItem});
export const setActiveItem = (activeItem) => ({type: SET_ACTIVE_ITEM, activeItem: activeItem});