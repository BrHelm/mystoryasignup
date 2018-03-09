import React, { Component } from "react";
import {Glyphicon, Button} from 'react-bootstrap';
import "./App.css";

class SelectPage extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>

                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 containerText' style={{ width: '480px' }}>
                        <img alt="" className="crossImg img-responsive" src={require("./img/cross2.png")} />
                        <div class="top-left"><Button bsSize="large"><Glyphicon glyph="glyphicon glyphicon-pencil" /></Button></div>
                        <div class="bottom-left"><Button bsSize="large"><Glyphicon glyph="glyphicon glyphicon-volume-up" /></Button></div>
                        <div class="top-right"><Button bsSize="large"><Glyphicon glyph="glyphicon glyphicon-picture" /></Button></div>
                        <div class="bottom-right"><Button bsSize="large"><Glyphicon glyph="glyphicon glyphicon-facetime-video" /></Button></div>
                    </div>

                </div>
            </div>
        );
    }
}

export default SelectPage;