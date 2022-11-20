import { NavLink } from "react-router-dom"
import { Navbar as NavbarBoot, Nav, Container, Button } from "react-bootstrap"


export function Navbar () {
    return (
        <NavbarBoot className ="bg-white shadow-sm mg-3">
            <Container>
                <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                <Button>
                    
                </Button>
            </Container>
        </NavbarBoot>
    )
}