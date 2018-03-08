import React from 'react';
import LogIn from './LogIn';
import './App.css';

const Landing = () => {
    return (
        <div className="container-fluid">
          <div className="row jumbophoto">

          <div className='row'>
            <div className="col-sm-4 col-md-4 col-lg-4"></div>
            <div className="col-sm-1 col-md-1 col-lg-1"></div>

            <div className="col-sm-1 col-md-1 col-lg-1">
              <div className="row"><div className="col-sm-12 col-md-12 col-lg-12">
                <img src={require('./img/mysLogo00.png')} alt="nullitem" style={{ marginLeft: "50%" }} />
              </div></div>
            </div>

            <div className="col-sm-1 col-md-1 col-lg-1"></div>
            <div className="col-sm-4 col-md-4 col-lg-4"></div>
          </div>

          <div className='row' style={{marginTop: '25%'}}>
            <div className='row'><h1 style={{ textAlign: 'center', margin: '1%', color:'white' }}>Coming Soon... Sign Up Now!</h1></div>
            <div className='row' style={{ textAlign: 'center', margin: '1%', color: 'white', fontSize: '2em' }}>We'll get in touch once we are ready.</div>
            <div className='row' style={{ position: 'relative' }}><LogIn/></div>
          </div>

          </div>
        </div>
    );
};

export default Landing;
