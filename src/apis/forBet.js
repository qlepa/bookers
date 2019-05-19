import axios from 'axios';

export default axios.create({
  baseURL: "https://frontapi.iforbet.pl/events"
});