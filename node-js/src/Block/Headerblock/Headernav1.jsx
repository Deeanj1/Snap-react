import "./HeaderNav.css";
import logo from "../../images/logo.svg";
import { useState } from "react"; 
import todo from "../../images/icon-todo.svg";
import yay from "../../images/icon-calendar.svg";
import reminders from "../../images/icon-reminders.svg";
import planning from "../../images/icon-planning.svg";

const Headernav1 = () => {

  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <div className="headernav1container">
      <img src={logo} alt="Logo" />
      <nav className="nav-menu">
        <div className="nav-item">
          <span
            className="nav-link"
            onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
          >
            Features
          </span>
          <ul
            className={`dropdown ${isFeaturesOpen ? "show" : ""}`} 
          >
            <li><a href="#"><img src={todo}></img>Todo List</a></li>
            <li><a href="#"><img src={yay}></img>Calendar</a></li>
            <li><a href="#"><img src={reminders}></img>Reminders</a></li>
            <li><a href="#"><img src={planning}></img>Planning</a></li>
          </ul>
        </div>
        <div className="nav-item">
          <span
            className="nav-link"
            onClick={() => setIsCompanyOpen(!isCompanyOpen)}
          >
            Company
          </span>
          <ul
            className={`dropdown ${isCompanyOpen ? "show" : ""}`} 
          >
            <li><a href="#">History</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="nav-item">
          <a href="#" className="nav-link">Careers</a>
        </div>
        <div className="nav-item">
          <a href="#" className="nav-link">About</a>
        </div>
      </nav>
    </div>
  );
};

export default Headernav1;