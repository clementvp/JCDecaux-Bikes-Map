<template>
  <div class="bicloo-table">
    <div class="columns">
      <div class="column is-half">
        <b-field label="Recherche par nom de station">
          <b-input v-model="search" />
        </b-field>
      </div>
    </div>
    <b-table :data="stations" :paginated="true" :per-page="17">
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
        <b-table-column field="status"
         label="Status"
         sortable>{{ props.row.status }}
        </b-table-column>
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
};
</script>
