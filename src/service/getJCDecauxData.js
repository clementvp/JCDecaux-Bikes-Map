import axios from 'axios';
import cleanStationsData from './cleanStationsData';

const getJCDecauxData = () => new Promise(async (resolve, reject) => {
  try {
    const response = await axios.get(`https://api.jcdecaux.com/vls/v1/stations?contract=${process.env.VUE_APP_JCDECAUX_CITY}&apiKey=${process.env.VUE_APP_JCDECAUX_API_KEY}`);
    const data = cleanStationsData(response.data);
    resolve(data);
  } catch (error) {
    reject(error);
  }
});

export default getJCDecauxData;
