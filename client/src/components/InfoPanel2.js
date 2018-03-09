import React from 'react';

const InfoPanel2 = () => (
    <div className="container-fluid">
        <div className="row" style={{ marginTop: '1%', marginBottom: '5%' }}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <div className='row'>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <img style={{ marginLeft: '35%' }} alt="" className="img-responsive" src={require("./img/mystoComp2.png")} /></div></div>
                <div className='row' style={{ textAlign: 'center', margin: '1%', color: 'teal', fontSize: '3em', fontWeight: '900' }}>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 font3">
                        Create and share your story with friends, or the world.</div></div>
                <div className='row' style={{ textAlign: 'center', margin: '1%', color: 'black', fontSize: '2em', fontWeight: '500' }}>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        Translated to over 25 different langauges. Write, add pictures, audio, or even video. Tell your story exactly how you want.</div></div>

            </div>
        </div>
    </div>
);

export default InfoPanel2;