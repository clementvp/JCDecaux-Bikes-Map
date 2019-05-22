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
  },
};
</script>
<style>
html,body, #app{
  height: 100%;
}
</style>
