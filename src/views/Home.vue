<template>
  <div class="home">
    <div class="columns">
      <div class="column is-half map-ctn">
        <Map/>
      </div>
      <div class="column is-half map-ctn">
        <BiclooTable/>
      </div>
    </div>
  </div>
</template>

<script>
import BiclooTable from '../components/BiclooTable.vue';
import Map from '../components/Map.vue';

export default {
  name: 'home',
  components: {
    Map,
    BiclooTable,
  },

};
</script>
<style>
.home,.columns{
  height: 100%;
}
</style>
