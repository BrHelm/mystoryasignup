import React from 'react';

const InfoPanel = () => (
    <div className="container-fluid">
        <div className="row" style={{ marginTop: '1%', marginBottom: '5%'}}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                
                <div className='row'>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <img style={{marginLeft: '35%'}} alt="" className="img-responsive" src={require("./img/mystoComp2.png")} /></div></div>
                <div className='row' style={{ textAlign: 'center', margin: '1%', color: 'teal', fontSize: '3em', fontWeight: '900' }}>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 font3">
                    The Mystorya movement is coming soon!</div></div>
                <div className='row' style={{ textAlign: 'center', margin: '1%', color: 'black', fontSize: '2em', fontWeight: '500' }}>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    Your stories in the cloud for the rest of your life and future generations. Create, Read, and Share Stories with your friends.</div></div>
                    
            </div>
        </div>
    </div>
);

export default InfoPanel;