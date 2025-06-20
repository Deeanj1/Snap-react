import "./Heroblock.css";
import image1 from "../../images/image-hero-desktop.png";

const Heroimages = () => {
    return (
        <div className="heroimagecontainer">
            <img className="heroimage" src={image1} alt="Hero" ></img>
        </div>
    )
}

export default Heroimages;