import Nav from "react-bootstrap/Nav";
import useTheme from "../../contexts/ThemeContext";
const Navbar = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <Nav className="d-flex justify-content-between bg-light">
        <h1 className="m-2">SPACE X</h1>
        <div className="form-check form-switch p-2">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            defaultChecked
            onClick={toggleTheme}
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
