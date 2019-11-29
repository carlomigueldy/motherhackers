<template>
  <v-app>
    <Navbar />
    
    <center>Motherhackers</center>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar,
  }
}
</script>

