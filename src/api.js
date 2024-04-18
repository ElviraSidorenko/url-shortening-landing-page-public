// Using Axios to make HTTP requests to the Shrtlnk API

import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Get your API key from 'https://shrtlnk.dev/developer'

// Create an Axios instance with a custome configuration
const api = axios.create({
  baseURL: 'https://shrtlnk.dev/api/v2',
  headers: {
    'api-key': API_KEY,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default api;
