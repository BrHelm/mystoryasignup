import React from 'react';
import '../App.css';

const Splash = () => {
  return (
    <div className="container-fluid">
      <div className="row jumbophoto">

        <div className="col-sm-8 col-md-8 col-lg-8">
          <div className="row"><div className="col-sm-12 col-md-12 col-lg-12">
            <img src={require('../img/mysLogo00.png')} alt="nullitem" />
          </div></div>
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4">
        </div>

      </div>
    </div>
  );
};

export default Splash;
