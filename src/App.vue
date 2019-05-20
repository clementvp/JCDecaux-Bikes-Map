<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('getStationsData', process.env.VUE_APP_JCDECAUX_CITY);
  },
};
</script>
<style>
html,body, #app{
  height: 100%;
}
</style>
