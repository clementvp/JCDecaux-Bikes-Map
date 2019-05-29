<template>
  <div class="mapComponent" v-if=mapIsReady>
    <MglMap :accessToken="accessToken"
    :mapStyle="mapStyle"
    :zoom="zoom"
    :center="center"
    >
    <div v-for="station in stations" :key=station.number>
        <MglMarker :coordinates="[station.position.lng, station.position.lat]" color="#f17825" >
          <MglPopup>
            <div>
              <h4 class="title is-5">{{station.name}}</h4>
              <h5 class="subtitle is-5">Status: {{station.status}}</h5>
              <h5 class="subtitle is-5">Vélos disponibles: {{station.available_bikes}}</h5>
            </div>
          </MglPopup>
        </MglMarker>
      </div>
    </MglMap>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl';
import { MglMap, MglMarker, MglPopup } from 'vue-mapbox';


export default {
  name: 'mapComponent',
  components: {
    MglMap,
    MglMarker,
    MglPopup,
  },
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: process.env.VUE_APP_MAPBOX_STYLE,
      zoom: 12,
    };
  },
  created() {
    this.mapbox = Mapbox;
  },
  computed: {
    stations() {
      return this.$store.state.stationsForMap;
    },
    center() {
      return this.$store.state.centeredCityCoords;
    },
    mapIsReady() {
      return this.$store.state.mapIsReady;
    },
  },
  async mounted() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      }
    },
    showPosition(position) {
      this.zoom = 14;
      this.center([position.coords.longitude, position.coords.latitude]);
    },
  },
};
</script>
<style>
.mapboxgl-marker{
  cursor: pointer !important;
}
.mapComponent{
  height: 100%;
}
</style>
