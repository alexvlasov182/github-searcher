import axios from 'axios';

const agent = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.REACT_APP_KEY}`,
  },
});

export default agent;
