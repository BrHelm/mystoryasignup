import React, { Component } from 'react';
import { connect } from 'react-redux';

class LogIn extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [
                    <div className='container'><div className='row'>
                        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                            <a href="/auth/facebook"><img src={require('./img/ContinueWithFacebook2.png')} alt="Continue with facebook" /></a>
                        </div>
                        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                            <a href="/auth/google"><img src={require('./img/ContinueWithGoogle.png')} alt="Continue with google" /></a>
                        </div>
                    </div></div>
                ];
            default:
                return [
                    <div className='container'><div className='row' style={{ marginLeft: '43%' }}>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <div><a href="/api/logout">Logout</a></div>
                    </div></div></div>
                ];
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <ul className="center">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(LogIn);
