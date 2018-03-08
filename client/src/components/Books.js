import React from 'react';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

const Books = props => {
  return(
  <div>
    <div className="row">

      <div className="col-sm-3 col-md-3 col-lg-3">
        <div>
          <img className="img-responsive" src={require("./img/book.jpg")} value={props.id1} />
        </div>
      </div>

      <div className="col-sm-3 col-md-3 col-lg-3">
        <div>
          <img className="img-responsive" src={require("./img/book.jpg")} value={props.id2} />
        </div>
      </div>
      <div className="col-sm-3 col-md-3 col-lg-3">
        <div>
          <img className="img-responsive" src={require("./img/book.jpg")} value={props.id3} />
        </div>
      </div>
      <div className="col-sm-3 col-md-3 col-lg-3">
        <div>
          <img className="img-responsive" src={require("./img/book.jpg")} value={props.id4} />
        </div>
      </div>

    </div>
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12">
        <img className="img-responsive" src={require('./img/shelf11copy.png')} />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-1 col-md-1 col-lg-1">
        <div>
          <Button bsStyle="info" onClick={props.clickleft}>
            <Glyphicon glyph="chevron-left" />
          </Button>
        </div>
      </div>
      <div className="col-sm-10 col-md-10 col-lg-10">
      </div>
      <div className="col-sm-1 col-md-1 col-lg-1 text-center">
        <Button bsStyle="info" onClick={props.clickright}>
          <Glyphicon glyph="chevron-right" />
        </Button>
      </div>
    </div>
  </div>
)}

export default  Books;
