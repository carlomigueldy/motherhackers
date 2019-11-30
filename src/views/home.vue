<template>
    <v-container>
        <Slideshow 
          :carouselHeight="600" 
          class="elevation-2" />
        <div id="map"></div>
    </v-container>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.js'
import { first } from '../geojson/first'
import { first2nd } from '../geojson/first2nd'
import { second } from '../geojson/second'
import { third } from '../geojson/third'
import { fourth } from '../geojson/fourth'
import { fifth } from '../geojson/fifth'
import { sixth } from '../geojson/sixth'
import { seventh } from '../geojson/seventh'
import Slideshow from '../components/Slideshow'

export default {
  components: {
    Slideshow
  },

  data: () => ({
    first: first,
    first2nd: first2nd, 
    second: second, 
    third: third,
    fourth: fourth, 
    fifth: fifth,
    sixth: sixth, 
    seventh: seventh, 
    slides: [
      {
        text: 'clean marawi',
        html: `<div class="display-2">"Mamag-ogopa Tano Langon" is "Let us All Help"</div>`,
      },
      {
        text: 'help marawi',
        html: `<img src="../assets/hacker-new.gif" width="100%" alt="">`,
      },
      {
        text: 'rejuvenate',
        html: '',
      },
    ],
  }),
  
  mounted() {
    this.initMap()
  },

  methods: {
    customMarkerIcon(name, customSize, customAnchorPoint) {
      return L.icon({
          iconUrl: `${window.origin}/customMarkers/${name}.png`,
          iconSize:     customSize ? customSize : [80, 100], // size of the icon
          iconAnchor:   customAnchorPoint ? customAnchorPoint : [22, 94], // point of the icon which will correspond to marker's location
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      })
    },
    
    initMap() {
      let leaf0 = this.customMarkerIcon('leaf0', [50, 43], [35, 40])
      let leaf1 = this.customMarkerIcon('leaf1')
      let leaf2 = this.customMarkerIcon('leaf2')
      let leaf3 = this.customMarkerIcon('leaf3')
      let leaf4 = this.customMarkerIcon('leaf4')
      let leaf5 = this.customMarkerIcon('leaf5')
      const map = L.map('map').setView([8.0026, 124.2973], 15);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FybG9taWd1ZWxkeSIsImEiOiJjandjM3BvbGswNG1yNDhsYzJsbG9yM21sIn0.q7tueMfN8BVk3gZDUKItYQ', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          accessToken: 'pk.eyJ1IjoiY2FybG9taWd1ZWxkeSIsImEiOiJjandjM3BvbGswNG1yNDhsYzJsbG9yM21sIn0.q7tueMfN8BVk3gZDUKItYQ'
      }).addTo(map)

      const first = L.geoJSON(this.first, {
        style: {
            fillColor: 'peachpuff',
            color: 'grey',
            fillOpacity: 0.5,
            weight: 3,
        },
      }).addTo(map)
      L.marker([8.001522068007102, 124.28017616271974], { icon: leaf4 }).addTo(map)

      L.geoJSON(this.first2nd, {
        style: {
            fillColor: 'peachpuff',
            color: 'grey',
            fillOpacity: 0.5,
            weight: 3,
        },
      }).addTo(map)  
      L.marker([8.01053144611204, 124.28558349609375], { icon: leaf0 }).addTo(map)

      L.geoJSON(this.second, {
        style: {
            fillColor: 'peachpuff',
            color: 'grey',
            fillOpacity: 0.5,
            weight: 3,
        },
      }).addTo(map)
      L.marker([8.011381377155162, 124.29485321044922], { icon: leaf2 }).addTo(map)

      L.geoJSON(this.third, {
        style: {
            fillColor: 'peachpuff',
            color: 'grey',
            fillOpacity: 0.5,
            weight: 3,
        },
      }).addTo(map)
      L.marker([8.004411890235446, 124.28910255432129], { icon: leaf2 }).addTo(map)
      

      L.geoJSON(this.fourth, {
        style: {
            fillColor: 'peachpuff',
            color: 'grey',
            fillOpacity: 0.5,
            weight: 3,
        },
      }).addTo(map)
      L.marker([8.005006851091405, 124.30206298828125], { icon: leaf1 }).addTo(map)

      L.geoJSON(this.fifth, {
        style: {
            fillColor: 'peachpuff',
            color: 'grey',
            fillOpacity: 0.5,
            weight: 3,
        },
      }).addTo(map)
      L.marker([8.000077149209309, 124.29262161254881], { icon: leaf5 }).addTo(map)

      L.geoJSON(this.sixth, {
        style: {
            fillColor: 'peachpuff',
            color: 'grey',
            fillOpacity: 0.5,
            weight: 3,
        },
      }).addTo(map)
      L.marker([7.995912354611941, 124.29880142211914], { icon: leaf2 }).addTo(map)

      L.geoJSON(this.seventh, {
        style: {
            fillColor: 'peachpuff',
            color: 'grey',
            fillOpacity: 0.5,
            weight: 3,
        },
      }).addTo(map)
      L.marker([7.998207246692582, 124.31124687194824], { icon: leaf3 }).addTo(map)

      first.on('click', () => {
          this.$router.push({ name: 'photogrammetry' })
      })
    },
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

#map {
  height: 633px;
  z-index: 0;
}

.parallax {
  height: 500px;
  /* background-image: url('https://imgix.bustle.com/uploads/image/2018/6/11/27119373-064f-4582-916a-9f046652fe4b-incredibles-2-2.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70'); */
  /* background-color: red; */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 15rem;
}

.my-mx-15 {
    margin-left: 6rem;
    margin-right: 6rem;
}

.mb-15 {
  margin-bottom: 5rem;
}
</style>