<template>
  <div id="app">
    <Landing />
    <!-- <HelloWorld /> -->
    <!-- <Landing /> -->
   <!-- // <Portfolio /> -->
    <router-view />
  </div>
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Landing from './view/Landing.vue'

// import Portfolio from './view/Portfolio.vue'


// Vue.use(VueCarousel);

export default {
  name: 'App',
  components: {
    Landing,
    // HelloWorld,
    // Portfolio

  }
}
</script>

<style class=".\assets\tailwind.css">

</style>

<style>
*{
  margin: 0px;
}
</style>