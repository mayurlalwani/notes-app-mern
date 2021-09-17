import {
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import "./Header.css";

const Header = ({ setSearch }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  const history = useHistory();
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <span className="menu-items">HOME</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Nav>
          {userInfo ? (
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/mynotes">
                  <span className="menu-items">My Notes</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/sharednotes">
                  <span className="menu-items"> Shared with me</span>
                </Link>
              </Nav.Link>
              <NavDropdown
                title={userInfo?.name}
                id="navbarScrollingDropdown"
                style={{ color: "white" }}
              >
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link>
                <Link to="/login">
                  <span className="menu-items">LOGIN</span>
                </Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
