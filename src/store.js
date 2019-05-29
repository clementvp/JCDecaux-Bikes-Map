import Vue from 'vue';
import Vuex from 'vuex';
import getJCDecauxData from './service/getJCDecauxData';
import geocodeCity from './service/geocodeCity';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stationsForMap: [],
    stationsForTable: [],
    errors: [],
    centeredCityCoords: [],
    mapIsReady: false,
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
    setCenteredCityCoords(state, data) {
      this.state.centeredCityCoords = data;
      this.state.mapIsReady = true;
    },
  },
  actions: {
    async getStationsData(context) {
      try {
        const stations = await getJCDecauxData();
        context.commit('setStations', stations);
      } catch (error) {
        context.commit('setErrors', { msg: 'Une erreure est survenu lord de la récupération des informations JCDecaux' });
      }
    },
    async getCenteredCityCoords(context) {
      try {
        const coordinates = await geocodeCity();
        context.commit('setCenteredCityCoords', coordinates);
      } catch (error) {
        context.commit('setErrors', { msg: 'Une erreure est survenu lord de la récupération des informations de geocoding de la ville ' });
      }
    },
  },
});
