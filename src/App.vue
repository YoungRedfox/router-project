<template>
  <div id="app">
    <NavMain /> 
    <router-view/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, cupiditate.</p>
    <FooterMain />
  </div>
</template>
<script>
import NavMain from "./components/nav/nav";
import FooterMain from "./components/nav/footer";
export default {
  components: {
    NavMain,
    FooterMain,
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0px;
  margin: 0px;
}

</style>
