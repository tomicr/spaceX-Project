import Nav from "react-bootstrap/Nav";
import { useTheme } from "../../contexts/ThemeContext";
import rocket from "../../assets/rocket.jpg";
const Navbar = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <Nav className="d-flex justify-content-between bg-light">
        <img
          className="m-2"
          src={rocket}
          srcSet={rocket}
          alt="logo"
          width="50"
          height="50"
        />
        <div className="form-check form-switch p-3">
          <input
            className="form-check-input position-static"
            type="checkbox"
            role="switch"
            id="labelCheck"
            aria-label="..."
            defaultChecked
            onChange={toggleTheme}
          />
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;
