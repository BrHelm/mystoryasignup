import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import '../Nav.css'


class Nav extends Component{
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [<li key="1"><a href="/auth/facebook"><img src={require('../img/ContinueWithFacebook2.png')} alt="Continue with facebook" /></a></li>,
                <li key="2"><a href="/auth/google"><img src={require('../img/ContinueWithGoogle.png')} alt="Continue with google" /></a></li>
                ];
            default:
                return [
                    <li key="2"><a href="/api/logout">Logout</a></li>,
                    <li key="4"><a href="/api/profile">Profile</a></li>
                ];
        }
    }
    
    render(){
        return(

            <Navbar id="nav" className="navbar-form navbar-fixed-top">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={this.props.auth ? '/books' : '/'} className="left brand-logo">
                            <img src={require('../img/logoM2.png')} alt="Mystorya" />
                        </Link>
                        <a href="#home"><img id="brand" src={require("../img/mystolo.png")} /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullRight id="search">
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                        <Button type="submit">Submit</Button>
                        {this.renderContent()}
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>

        );
    }
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Nav);