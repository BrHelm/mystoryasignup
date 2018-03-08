import React from 'react';
import './Footer.css';

const Footer = () => (
        <div className="container-fluid footer">
            <div className="row" style={{marginTop: '1%'}}>

                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <a href='/'><img alt="" className="footerLogo img-responsive" src={require("./img/mysLogo00.png")} /></a>
                </div>

                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h4>MyStorya Inc.</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                            Palo Alto, Ca
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                            hello@mystorya.com
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                            www.mystorya.com
                        </div>
                    </div>
                </div>

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                
                    <div className='row' style={{marginLeft: '55%'}}>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
                            <a><img alt="" className="socialIcons" src={require("./img/github.png")} /></a>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
                            <a href="https://www.linkedin.com/in/pat-hustad-56277b36/"><img alt=""  className="socialIcons" src={require("./img/linkedin2.png")} /></a>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
                            <a><img alt=""  className="socialIcons" src={require("./img/stack.png")} /></a>
                        </div>
                    </div>
                    <div className='row' style={{marginLeft: '55%', marginTop: '5%'}}>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
                            <a><img alt="" className="socialIcons" src={require("./img/insta2.png")} /></a>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
                            <a><img alt=""  className="socialIcons" src={require("./img/facebook2.png")} /></a>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
                            <a><img alt=""  className="socialIcons" src={require("./img/googlePlus2.png")} /></a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
);

export default Footer;
