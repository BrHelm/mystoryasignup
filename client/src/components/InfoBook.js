import React, { Component } from "react";
import "./App.css";
import FlipPage from 'react-flip-page';

class InfoBook extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row' style={{ marginTop: '1%' }}>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <FlipPage showSwipeHint='true' flipOnTouch='true' loopForever='true' height='720' width='1280px' orientation='horizontal' uncutPages='true' maxAngle='65' animationDuration='400' >
                            <article>
                                <img className="img-responsive" src={require("./img/rihannaPage0.jpg")} />
                            </article>
                            <article>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <span> text </span>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <span> text </span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <h1>Chapter 1</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="row">
                                                <p />
                                                <p />
                                                <p />
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </p>
                                                <p>
                                                    Consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </p>
                                            </div>
                                            <div className='row'>
                                                <div className="col-sm-4 col-md-8 col-lg-12">
                                                    <iframe id="videoPlayer" width="480px" height="272px" src="https://www.youtube.com/embed/0RyInjfgNc4" className="center-block" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6 col-lg-6'>
                                        <h1>My awesome 2 article</h1>
                                        <p>My awesome 2 content</p>
                                    </div>
                                    <div className='col-sm-6 col-md-6 col-lg-6'>
                                        <h1>My awesome 2.5 article</h1>
                                        <p>My awesome 2.5 content</p>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6 col-lg-6'>
                                        <h1>My awesome 3 article</h1>
                                        <p>My awesome 3 content</p>
                                    </div>
                                    <div className='col-sm-6 col-md-6 col-lg-6'>
                                        <h1>My awesome 3.5 article</h1>
                                        <p>My awesome 3.5 content</p>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6 col-lg-6'>
                                        <h1>My awesome 3 article</h1>
                                        <p>My awesome 3 content</p>
                                    </div>
                                    <div className='col-sm-6 col-md-6 col-lg-6'>
                                        <h1>My awesome 3.5 article</h1>
                                        <p>My awesome 3.5 content</p>
                                    </div>
                                </div>
                            </article>
                        </FlipPage>
                    </div>
                </div>

            </div>
        );
    }
}

export default InfoBook;