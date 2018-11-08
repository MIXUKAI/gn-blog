import axios from 'axios';

const baseURL = 'http://127.0.0.1:8080/api';

const fetch = axios.create({
  baseURL
})

export default fetch;