import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {

  constructor(){
    super();
    this.state = {
      searchText: ''
    }
  }

  updateSearchText(e){
    console.log( e.target.value );
    this.setState({
      searchText: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log("Ready to search: ", this.state.searchText);

    const url = `/details/${ this.state.searchText }`;

    // Navigate to a new route, using the history prop
    // which was automagically passed to this component by the Route component which created it
    this.props.history.push( url );

  }

  render(){
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <input type="text" name="search" placeholder="Username"
        onChange={ this.updateSearchText.bind(this) }/>
        <br />
        <input type="submit" className="button" value="Search" />
      </form>
    );
  }
}

export default Search;
