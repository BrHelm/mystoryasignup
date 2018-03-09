import React, { Component } from 'react';
/* import { Link } from "react-router-dom";
import { render } from "react-dom"; */
import { Carousel } from "react-bootstrap";
import "./App.css";

class BookShelfDisplay extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    /* alert(`selected=${selectedIndex}, direction=${e.direction}`); */
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
        <div className="container-fluid">
            <div className="row">

                <div className="container">
                    <div className="row" >
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ backgroundColor: 'rgb(240, 240, 240)' }} >
                            <h3 className="text-center">New Stories</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Carousel>
                            <Carousel.Item>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/celebstory3.jpg")} /></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/celebstory1.jpg")} /></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/food2.jpg")} /></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/amazon.jpg")} /></div>
                                    </div></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/music3.jpg")} /></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/celebstory2.jpg")} /></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/newstory2.png")} /></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/popstory4.jpg")} /></div>
                                    </div></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/ririBazar.jpg")} /></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/tech2.jpg")} /></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/travel3.jpg")} /></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/ps4.jpg")} /></div>
                                    </div></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/tech1.jpg")} /></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/tech3.jpg")} /></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/proj2.jpg")} /></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img alt="" className="shelfBook img-responsive" src={require("./img/apple.jpg")} /></div>
                                    </div></div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}

export default BookShelfDisplay;
