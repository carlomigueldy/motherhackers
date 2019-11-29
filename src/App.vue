<template>
  <v-app>
    <!-- <router-view></router-view> -->
    <h1>Project Name</h1>
    <v-content>
      <v-container>
        <div id="map"></div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.js'

export default {
  mounted() {
    this.initMap()
  },

  methods: {
    initMap() {
      const map = L.map('map').setView([8.0078, 124.2908], 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FybG9taWd1ZWxkeSIsImEiOiJjandjM3BvbGswNG1yNDhsYzJsbG9yM21sIn0.q7tueMfN8BVk3gZDUKItYQ', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          accessToken: 'pk.eyJ1IjoiY2FybG9taWd1ZWxkeSIsImEiOiJjandjM3BvbGswNG1yNDhsYzJsbG9yM21sIn0.q7tueMfN8BVk3gZDUKItYQ'
      }).addTo(map)
    },
  }
}
</script>

<style>
#map {
  height: 500px;
}
</style>