import "./Heroblock.css"
import client1 from "../../images/client-databiz.svg";
import client2 from "../../images/client-audiophile.svg";
import client3 from "../../images/client-meet.svg";
import client4 from "../../images/client-maker.svg";

const Herotext = () => {
    return (
        <div className="herotextcontainer">
            <h1>Make <br /> Remote Work</h1>
            <p>Get your team in sync. No matter the Location. Streamline Processes. Create team Rituals, and watch Productivity soar. </p>
            <button>Learn More</button>

            <div className="clientlogos">
                <img src={client1}alt="Client 1" />
                <img src={client2} alt="Client 2" />
                <img src={client3} alt="Client 3" />
                <img src={client4} alt="Client 4" />
            </div>
        </div>
        
    )
}
export default Herotext;