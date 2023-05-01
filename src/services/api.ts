import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://formsubmit.co/jadna.developer@gmail.com',
  method: 'POST',
});
