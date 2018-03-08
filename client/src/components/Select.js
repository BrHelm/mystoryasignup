import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import Profile from './Profile';
import { Link } from 'react-router-dom';

class Select extends Component {
    constructor(props) {
        super();
        this.state = {
            activeTab: props.activeTab || 1,
         };
        
        this.handleSelect = this.handleSelect.bind(this);
    }
    
    render() {
        return (
            <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect} id="tabs" >
                <div className="fixed-action-button">
                    <Link to="/books/new" className="btn-floating btn-large red">
                        Create New Book
                            <i className="material-icons">add_circle</i>
                    </Link>
                </div>
                <Tab eventKey={1} title="Profile" id="profile" ><Profile /></Tab>
                <Tab eventKey={3} title="My Friends Stories" id="friends" >Friends Content</Tab>
            </Tabs>
        );
    }

    handleSelect(selectedTab) {
        this.setState({
            activeTab: selectedTab
        });
    }
    
}

export default Select;
