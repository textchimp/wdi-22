import axios from 'axios';

const Helpers = {
  getUserInfo: (username) => {
    return axios.get(`http://api.github.com/users/${ username }`);
  },

  getUserRepos: (username) => {
    return axios.get(`http://api.github.com/users/${ username }/repos`);
  }
};

export default Helpers;
