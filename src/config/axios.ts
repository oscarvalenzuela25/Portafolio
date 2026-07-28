import axios from 'axios';
import envs from './envs';

export const axiosConfig = axios.create({
  baseURL: envs.api,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
