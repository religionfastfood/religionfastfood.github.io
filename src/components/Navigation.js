import 'bootstrap/dist/css/bootstrap.min.css';
import '../component-css/Navigation_CSS.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from 'react';

function Navigation (){

    useEffect(() => {
        let listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled > 300) {
                document.querySelector('.navbar').classList.add('scroll');
            } else {
                document.querySelector('.navbar').classList.remove('scroll');
            }
        })
        return() => {
            document.removeEventListener("scroll", listener)
        }
    })

    return(
        
        <Navbar fixed="top" bg="transparent" variant="dark" expand="lg">
            <div class="container">
            <Navbar.Brand href="/">CM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
       

    );
}

export default Navigation;