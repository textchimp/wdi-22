import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render(){
    return (
      <div>
        <h3>Welcome to our GitHub app</h3>
        <p>
          This will display a basic user profile for a given user, via the GitHub API
        </p>
        <p>
          <Link to="search">
            <button className="button-primary">Search for a user</button>
          </Link>
          &nbsp;
          <button className="button-primary">Pick a random WDi22 student</button>
        </p>
      </div>
    );
  }
}

export default Home;
