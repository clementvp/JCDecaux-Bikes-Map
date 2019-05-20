import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import cleanStationsNames from './service/cleanNames';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stationsForMap: [],
    stationsForTable: [],
    errors: [],
  },
  mutations: {
    setStations(state, data) {
      this.state.stationsForMap = data;
      this.state.stationsForTable = data;
    },
    setStationsForMap(state, data) {
      this.state.stationsForMap = data;
    },
    setErrors(error) {
      this.state.errors.push(error);
    },
  },
  actions: {
    async getStationsData(context, city) {
      try {
        const response = await axios.get(`https://api.jcdecaux.com/vls/v1/stations?contract=${city}&apiKey=${process.env.VUE_APP_JCDECAUX_API_KEY}`);
        const stations = cleanStationsNames(response.data);
        context.commit('setStations', stations);
      } catch (error) {
        context.commit('setErrors', { msg: 'Une erreure est survenu lords de la récupération des inforamations bicloo' });
      }
    },
  },
});
