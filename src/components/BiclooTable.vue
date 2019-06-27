<template>
  <div class="bicloo-table">
    <div class="columns">
      <div class="column is-half">
        <label class="title is-6">Rechercher par nom de stations</label>
        <b-field grouped>
          <b-input v-model="search" type="search" icon="magnify" id="search-input"/>
          <div @click="resetSearch()" id="reseat-search">
            <b-icon icon="close-circle" size="is-medium"></b-icon>
          </div>
        </b-field>
      </div>
    </div>
    <b-table :data="stations" :paginated="true" :per-page="10" :selected.sync="selected">
      <template slot-scope="props">
        <b-table-column field="name" label="Nom" sortable>{{ props.row.name}}</b-table-column>
        <b-table-column
          field="available_bikes"
          label="Vélos disponibles"
          sortable
        >{{ props.row.available_bikes }}</b-table-column>
        <b-table-column
          field="available_bike_stands"
          label="Plots disponibles"
          sortable
        >{{ props.row.available_bike_stands }}</b-table-column>
        <b-table-column field="status" label="Status" sortable>{{ props.row.status }}</b-table-column>
      </template>
    </b-table>
  </div>
</template>
<script>


export default {
  name: 'bicloo-table',
  data() {
    return {
      search: '',
      selected: null,
    };
  },
  computed: {
    stations() {
      const regex = new RegExp(this.search, 'i');
      const stations = this.$store.state.stationsForTable;
      const result = stations.filter(station => station.name.match(regex));
      this.$store.commit('setStationsForMap', result);
      return result;
    },
  },
  methods: {
    resetSearch() {
      this.search = '';
      this.selected = null;
    },
  },
  watch: {
    selected(selection) {
      if (this.selected) {
        this.search = selection.name;
      }
    },
  },
};
</script>
<style scoped>
#reseat-search:hover {
  cursor: pointer;
}
</style>
