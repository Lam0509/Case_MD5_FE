import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "@mui/material/Button";
import * as React from "react";
import SendIcon from "@mui/icons-material/Send";


function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Button variant="contained" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <Button style={{marginLeft:'10px'}} color="error" variant="contained" component="label">
                            Assessment
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <Button style={{marginLeft:'10px'}} color="secondary" variant="contained">
                            Share
                        </Button>
                        <Button style={{marginLeft:'10px'}} variant="contained" color="success" endIcon={<SendIcon/>}>
                            Send
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;