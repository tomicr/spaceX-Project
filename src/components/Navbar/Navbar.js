import Nav from "react-bootstrap/Nav";
import { useTheme } from "../../contexts/ThemeContext";
import rocket from "../../assets/rocket.png";
const Navbar = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <Nav className="d-flex justify-content-between bg-light">
        <img className="m-2" src={rocket} alt="logo" width="100" height="50" />
        <div className="form-check form-switch p-3">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            defaultChecked
            onChange={toggleTheme}
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckChecked"
          ></label>
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;
