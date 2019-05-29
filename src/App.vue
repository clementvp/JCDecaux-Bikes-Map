<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('getStationsData');
    this.$store.dispatch('getCenteredCityCoords');
  },
};
</script>
<style>
html,body, #app{
  height: 100%;
}
</style>
