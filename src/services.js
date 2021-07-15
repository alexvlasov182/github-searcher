import axios from './axios';

export default {
  searchUser: async (name) => {
    try {
      return await axios.get(`/users/${name}`);
    } catch (err) {
      throw err;
    }
  },
  getUser: async (id) => {
    try {
      return await axios.get(`/user/${id}`);
    } catch (err) {
      throw err;
    }
  },
  searchRepos: async (name, user_login) => {
    try {
      return await axios.get(`/repos/${user_login}/${name}`)
    } catch(err) {
      throw err;
    }
  },
  getAllRepos: async (id) => {
    try {
      return await axios.get(`/user/${id}/repos`)
    } catch(err) {
      throw err;
    }
  }
};
