import { BsSearch as SearchIcon } from "react-icons/bs";
import {
  IoMdNotificationsOutline as NotificationsOutlineIcon,
  IoMdArrowDropdown as ArrowDropdownIcon,
} from "react-icons/io";
import logo from "../../assets/logo.png";
import user from "../../assets/image 4.png";

const Header = () => {
  return (
    <nav className="header">
      <div className="header__logo">
        <img src={logo} alt="" className="header__logo--img" />
      </div>
    </nav>
  );
};

export default Header;
