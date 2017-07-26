import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './config/Routes';

const USER_DATA = {
  imageURL: 'http://fillmurray.com/200/200',
  username: 'matedge',
  name: 'Edge Hog'
};

// class HelloWorld extends React.Component {
//
//   render(){
//     return (
//       <div> Hello { this.props.name } </div>
//     )
//   }
// } // HelloWorld
//
// ReactDOM.render(
//   <HelloWorld name="Sweet Edgelord" />,
//   document.getElementById('app')
// );

class ProfileContainer extends React.Component {
  render(){
      return (
        <div>
          <ProfilePic order="1" image={this.props.user.imageURL} />
          <ProfileName name={this.props.user.name} />
          <ProfileLink username={this.props.user.username} />
          <Paragraph>
            Some gibberish about your personal brand here
          </Paragraph>
        </div>
      )
  }
}

class Paragraph extends React.Component {
  render(){
    return (
      <p>
        CHILDREN: { this.props.children }
      </p>
    );
  }
}

// var obj = {
//   a: 'hello',
//   hello: function(){
//     console.log(this.a);
//   }
// }
//
// class ProfilePic extends React.Component {
//   render() {
//     return (<img src={this.props.image} />);
//   }
// }

// Stateless Functional Component, for simple Components
// - no state, simpler to reason about and test
// - no class structure, more efficient to run/render
// - no render() method, just return some JSX
const ProfilePic = (props) => {
  return (<img src={props.image} title={props.order} />)
};


class ProfileName extends React.Component {
  render(){
    return ( <h3>{ this.props.name }</h3> );
  }
}

class ProfileLink extends React.Component {
  render(){
    return (
      <div>
        <a href={ `http://github.com/${ this.props.username }` }>
          { this.props.username }
        </a>
      </div>
    );
  }
}



// ReactDOM.render(
//   <ProfileContainer user={USER_DATA} />,
//   document.getElementById('app')
// );
ReactDOM.render(
  <Routes />,
  document.getElementById('app')
);
