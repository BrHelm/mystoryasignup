import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import Footer from './Footer';
import InfoPanel from './InfoPanel';
import InfoPanel2 from './InfoPanel2';
import InfoBook from './InfoBook';
import BookShelfDisplay from './BookShelfDisplay';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Landing />
                    <InfoPanel />
                    <BookShelfDisplay />
                    <InfoPanel2 />
                    <InfoBook />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
};

export default connect(null, actions)(App);
