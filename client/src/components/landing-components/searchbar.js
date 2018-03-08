import React from 'react';
import { Jumbotron, FormGroup, FormControl } from 'react-bootstrap';
import '../App.css';
const Search = () => {
  return (
    <Jumbotron>
      <FormGroup className="has-feedback">
        <FormControl id="searchhome" type="text" placeholder="Search Mystorya" />
        <i className="glyphicon glyphicon-search form-control-feedback"></i>
      </FormGroup>{' '}
    </Jumbotron>
  );
}

export default Search;
