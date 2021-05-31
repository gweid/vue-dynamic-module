<template>
  <div id="app">
    <div v-if="this.$route.name!=='Login'">
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> | 
      <router-link to="/moduleA/index">moduleA</router-link> | 
      <router-link to="/moduleB/index">moduleB</router-link> | 
      <router-link to="/moduleC/index">moduleC</router-link> | 
      <router-link to="/moduleD/index">moduleD</router-link> | 
      <router-link to="/moduleE/index">moduleE</router-link> | 
      <router-link to="/moduleF/index">moduleF</router-link> | 
      <router-link to="/moduleG/index">moduleG</router-link> | 
      <router-link to="/moduleH/index">moduleH</router-link> | 
      <router-link to="/moduleI/index">moduleI</router-link> | 
      <router-link to="/moduleJ/index">moduleJ</router-link> | 
      <router-link to="/moduleK/index">moduleK</router-link> | 
      <router-link to="/moduleL/index">moduleL</router-link> | 
      <router-link to="/moduleM/index">moduleM</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
