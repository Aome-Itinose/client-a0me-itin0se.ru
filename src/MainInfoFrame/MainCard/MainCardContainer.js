import MainCard from "./MainCard";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        imagePath: state.profilePage.profile.imagePath,
        fullName: state.profilePage.profile.fullName,
        aboutMe: state.profilePage.profile.aboutMe,
    }
}

const MainCardContainer = connect(mapStateToProps, null)(MainCard);
export default MainCardContainer;