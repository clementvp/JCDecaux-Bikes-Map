import axios from 'axios';

const geocodeCity = () => new Promise(async (resolve, reject) => {
  try {
    const response = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${process.env.VUE_APP_JCDECAUX_CITY}`);
    const { features } = response.data;
    resolve(features[0].geometry.coordinates);
  } catch (error) {
    reject(error);
  }
});
export default geocodeCity;
