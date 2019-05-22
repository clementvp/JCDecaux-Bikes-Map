import axios from 'axios';
import cleanStationsNames from './cleanNames';

const getJCDecauxData = () => new Promise(async (resolve, reject) => {
  try {
    const response = await axios.get(`https://api.jcdecaux.com/vls/v1/stations?contract=${process.env.VUE_APP_JCDECAUX_CITY}&apiKey=${process.env.VUE_APP_JCDECAUX_API_KEY}`);
    const data = cleanStationsNames(response.data);
    resolve(data);
  } catch (error) {
    reject(error);
  }
});

export default getJCDecauxData;
