<template>
  <v-app>
    <div id="app">
      <NavMain /> 
      <div class="section">
        <router-view/>
      </div>
      <FooterMain />
    </div>
  </v-app>
</template>

<script>
import NavMain from "./components/nav/nav";
import FooterMain from "./components/nav/footer";
export default {
  name: 'App',

  components: {
    NavMain,
    FooterMain,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  height: 100%;
  .section {
    min-height: 100VW;
  }
}
body {
  padding: 0px;
  margin: 0px;
}
</style>
