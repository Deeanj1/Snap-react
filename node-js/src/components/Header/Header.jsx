import "./Header.css";
import Headernav1 from "../../Block/Headerblock/Headernav1";
import Headernav2 from "../../Block/Headerblock/Headernav2";
const Header = () => {
    return(
        <div className="headercontainer">
            <Headernav1 />;
            <Headernav2 />
        </div>
    )
}

export default Header;