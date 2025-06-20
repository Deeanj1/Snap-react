import "./Hero.css";
import Heroimages from "../../Block/Heroblock/Heroimages.jsx";
import Herotext from "../../Block/Heroblock/Herotext.jsx";

const Hero = () =>{
    return (
        <div className='herocontainer'>
           
           <Herotext />
           <Heroimages /> 
        </div>
    )
}

export default Hero;