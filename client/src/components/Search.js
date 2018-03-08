import React from 'react';
import {Jumbotron} from 'react-bootstrap';

const Search = props => (
  <div>
    <Jumbotron>
    <form>
      <div className="form-group">
      <input className="form-control" id="Search" aria-describedby="emailHelp" placeholder="Search" />
      </div>
    </form>
    </Jumbotron>
  </div>
);

export default Search;
