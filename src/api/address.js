import axios from 'axios';

const SERVER_URL = 'https://geodata.nationaalgeoregister.nl/locatieserver/v3';

export const getAddress = async (query) => {
  const result = await axios.get(`${SERVER_URL}/suggest?fq=type:adres&q=${query}&start=0&rows=20&fq=*:*`).catch((error) => { return error; });
  const { data: { response: { docs } } } = result;
  return docs;
};