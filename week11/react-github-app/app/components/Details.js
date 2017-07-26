import React from 'react';
import Helpers from '../utils/Helpers';

class Details extends React.Component {

  constructor(){
    super();
    this.state = {
      repos: [],
      user: {}
    }
  }

  componentWillMount(){
    const username = this.props.match.params.username;

    Helpers.getUserInfo( username ).then((response) => {
      this.setState({ user: response.data });
    });

//     let fakedUserData =
//     {
//   "login": "textchimp",
//   "id": 840233,
//   "avatar_url": "https://avatars0.githubusercontent.com/u/840233?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/textchimp",
//   "html_url": "https://github.com/textchimp",
//   "followers_url": "https://api.github.com/users/textchimp/followers",
//   "following_url": "https://api.github.com/users/textchimp/following{/other_user}",
//   "gists_url": "https://api.github.com/users/textchimp/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/textchimp/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/textchimp/subscriptions",
//   "organizations_url": "https://api.github.com/users/textchimp/orgs",
//   "repos_url": "https://api.github.com/users/textchimp/repos",
//   "events_url": "https://api.github.com/users/textchimp/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/textchimp/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "textchimp",
//   "company": null,
//   "blog": "",
//   "location": null,
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "public_repos": 17,
//   "public_gists": 2,
//   "followers": 13,
//   "following": 0,
//   "created_at": "2011-06-09T15:16:50Z",
//   "updated_at": "2017-04-25T23:05:13Z"
// };

  // this.setState({ user: fakedUserData });

  console.log('set user data')
    Helpers.getUserRepos( username ).then((response) => {
      this.setState({ repos: response.data });
      // debugger;
    });

  }

  // this.setState({ repos: repoResponse });

  shouldComponentUpdate( newProps, newState ){
    console.log('state changed', newState);
    return true;
  }

  render(){
    if( !this.state.repos.length ){
      return (<div> Loading... </div>);
    }

    return (
        <div>
          <h1>{ this.state.user.login }</h1>
          <img src={this.state.user.avatar_url} />
          <ul>
            {
              this.state.repos.map( (repo) => {
                // debugger;
                return (<li key={repo.id}> { repo.name } </li>);
              })
            }
          </ul>
        </div>
      );
    }

}

export default Details;
