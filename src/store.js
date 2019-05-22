import Vue from 'vue';
import Vuex from 'vuex';
import getJCDecauxData from './service/getJCDecauxData';

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
    async getStationsData(context) {
      try {
        const stations = await getJCDecauxData();
        context.commit('setStations', stations);
      } catch (error) {
        context.commit('setErrors', { msg: 'Une erreure est survenu lords de la récupération des inforamations bicloo' });
      }
    },
  },
});
