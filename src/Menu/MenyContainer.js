import {connect} from "react-redux";
import Menu from "./Menu";
import {setActiveItem} from "../redux/MenuReducer";
import {useLocation} from "react-router-dom";



let mapStateToProps = (state) => {
    return {
        menuItems: state.menu.menuItems,
        activeItem: state.menu.activeItem,
    }
}

const MenuContainer = connect(mapStateToProps, {setActiveItem})(Menu);
export default MenuContainer;