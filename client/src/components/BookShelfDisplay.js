import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { render } from "react-dom";
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
            <div className="container-fluid" >
                <div className="row">

                    <div className="container">
                    <div className="row darkBlueST">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="centerDiv font1">Popular Stories</div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                  <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} >
                                <Carousel.Item>
                                    <div className="container">
                                        <div className="row" style={{marginLeft: '2%'}}>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                <div className='containerText'>
                                                    <img alt="" className="shelfBook2 img-responsive" src={require("./img/celebstory3.jpg")} />
                                                    <div class="bookTitle">Road to Victory</div>
                                                    <div class="bookAuthor">Tom Brady</div>
                                                </div>
                                            </div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                <div className='containerText'>
                                                    <img alt="" className="shelfBook2 img-responsive" src={require("./img/celebstory1.jpg")} />
                                                    <div class="bookTitle">My Life</div>
                                                    <div class="bookAuthor">Kim</div>
                                                </div>
                                            </div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                <div className='containerText'>
                                                    <img alt="" className="shelfBook2 img-responsive" src={require("./img/food2.jpg")} />
                                                    <div class="bookTitle">Born a Chef</div>
                                                    <div class="bookAuthor">Gordan Ramsey</div>
                                                </div>
                                           </div>
                                            <div className='containerText'>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <img alt="" className="shelfBook2 img-responsive" src={require("./img/amazon.jpg")} /><div class="bookTitle2">Shop Amazon</div><div class="bookAuthor2"></div></div></div>         
                                    </div></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="container">
                                    <div className="row" style={{marginLeft: '2%'}}>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><div className='containerText'><img alt="" className="shelfBook2 img-responsive" src={require("./img/music3.jpg")} /><div class="bookTitle">Road to Victory</div><div class="bookAuthor">Tom Brady</div></div></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><div className='containerText'><img alt="" className="shelfBook2 img-responsive" src={require("./img/celebstory2.jpg")} /><div class="bookTitle">Road to Victory</div><div class="bookAuthor">Tom Brady</div></div></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><div className='containerText'><img alt="" className="shelfBook2 img-responsive" src={require("./img/newstory2.png")} /><div class="bookTitle">Road to Victory</div><div class="bookAuthor">Tom Brady</div></div></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><div className='containerText'><img alt="" className="shelfBook2 img-responsive" src={require("./img/popstory4.jpg")} /><div class="bookTitle">Road to Victory</div><div class="bookAuthor2">Tom Brady</div></div></div>         
                                    </div></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="container">
                                    <div className="row" style={{marginLeft: '2%'}}>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><div className='containerText'><img alt="" className="shelfBook2 img-responsive" src={require("./img/ririBazar.jpg")} /><div class="bookTitle">Road to Victory</div><div class="bookAuthor">Tom Brady</div></div></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><div className='containerText'><img alt="" className="shelfBook2 img-responsive" src={require("./img/tech2.jpg")} /><div class="bookTitle">Road to Victory</div><div class="bookAuthor">Tom Brady</div></div></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><div className='containerText'><img alt="" className="shelfBook2 img-responsive" src={require("./img/travel3.jpg")} /><div class="bookTitle">Road to Victory</div><div class="bookAuthor">Tom Brady</div></div></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><div className='containerText'><img alt="" className="shelfBook2 img-responsive" src={require("./img/ps4.jpg")} /><div class="bookTitle">Road to Victory</div><div class="bookAuthor2">Tom Brady</div></div></div>         
                                    </div></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="container">
                                    <div className="row" style={{marginLeft: '2%'}}>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><div className='containerText'><img alt="" className="shelfBook2 img-responsive" src={require("./img/tech1.jpg")} /><div class="bookTitle">Road to Victory</div><div class="bookAuthor">Tom Brady</div></div></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><div className='containerText'><img alt="" className="shelfBook2 img-responsive" src={require("./img/tech3.jpg")} /><div class="bookTitle">Road to Victory</div><div class="bookAuthor">Tom Brady</div></div></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><div className='containerText'><img alt="" className="shelfBook2 img-responsive" src={require("./img/proj2.jpg")} /><div class="bookTitle">Road to Victory</div><div class="bookAuthor2">Tom Brady</div></div></div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <div className='containerText'>
                                                <img alt="" className="shelfBook2 img-responsive" src={require("./img/apple.jpg")} />
                                                <div class="bookTitle">Road to Victory</div>
                                                <div class="bookAuthor2">Tom Brady</div>
                                            </div></div>
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
