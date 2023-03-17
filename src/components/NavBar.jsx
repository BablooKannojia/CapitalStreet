import React from 'react';
import Container from 'react-bootstrap/Container';
import './NavBar.css';
import Nav from 'react-bootstrap/Nav';
import Logo from '../img/shield_small.png';
import Navbar from 'react-bootstrap/Navbar';
import {BsFillBellFill,BsFillPlusCircleFill,BsFillHouseDoorFill,BsGraphUpArrow,BsPeople,
BsFillGiftFill,BsFillPhoneFill,BsPlay} from 'react-icons/bs';
import NavDropdown from 'react-bootstrap/NavDropdown';
export const NavBar = () => {
    return (
        <>
            <Navbar className='navbar-background' expand="lg">
                <Container>
                    <Navbar.Brand href="#"><img src={Logo} alt="" srcset="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link href="#" className='match-nav'><BsFillHouseDoorFill/> Match Center</Nav.Link>
                            <Nav.Link href="#" className='match-nav'><BsFillHouseDoorFill/> League Center</Nav.Link>
                            <Nav.Link href="#" className='match-nav'><BsGraphUpArrow/> Analysis</Nav.Link>
                            <Nav.Link href="#" className='match-nav'><BsPeople/> Refer & Earn</Nav.Link>
                            <Nav.Link href="#" className='match-nav'><BsFillGiftFill/> Passes</Nav.Link>
                            <Nav.Link href="#" className='match-nav text-yellow'>
                                <BsFillPhoneFill/>Mobile Apps
                            </Nav.Link>
                            <Nav.Link href="#" className='match-nav' >
                               <BsPlay/> Guide
                            </Nav.Link>
                        </Nav>
                        <BsFillBellFill className='match-nav right-nav me-4' />
                        <Nav.Link href="#" className='match-nav right-nav'>Rs.0.00<BsFillPlusCircleFill /></Nav.Link>
                        <NavDropdown className='match-nav ms-4 right-nav' title="admin1" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#">
                               Add Money
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Withdraw
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Scoring
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Faq
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}