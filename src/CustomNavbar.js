import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const CustomNavbar = () => {
    return (<Navbar className="justify-content-center" bg="dark" expand="sm" fixed="top" variant="dark">
          <Nav className="py-2">
            <Nav.Link className="px-6" href="#">HOME</Nav.Link>
            <Nav.Link className="px-6" href="#">COLLECTION</Nav.Link>
            <Nav.Link className="px-6" href="#">ABOUT US</Nav.Link>
            <Nav.Link className="px-6" href="#">CONTACT</Nav.Link>
          </Nav>
        </Navbar>
    )
}

export default CustomNavbar;