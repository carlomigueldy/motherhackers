<template>
    <v-content>
      <v-container>
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="4">

              </v-col>
              <v-col cols="8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laudantium fugiat? Molestias, nobis. Repellendus doloremque natus recusandae sequi dolores ullam cupiditate eum, perspiciatis laudantium! Voluptas nostrum quam repudiandae neque repellendus aspernatur perspiciatis ducimus, laboriosam saepe nemo! Et, dolorum. Eum nisi, consequuntur tempora molestiae dolores sequi harum aspernatur eaque repellat magni veritatis obcaecati rerum quaerat iste rem. Velit nulla porro adipisci alias facilis. Labore, eveniet. Ducimus ipsum aperiam ipsa libero quos corporis, provident soluta corrupti, nesciunt ut, illum modi eos eligendi dolorum mollitia possimus officia deleniti dignissimos animi? Ipsam repellat facere nisi libero dolor sed veniam voluptas optio possimus! Illum, eaque!
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-carousel height="200">
          <v-carousel-item
            v-for="(slide) in slides"
            :key="slide"
          >
            <v-sheet
              color="transparent"
              height="100%"
              tile
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div 
                  class="display-3">
                  {{ slide.text }}
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-container>
      <!-- <div class="my-mx-15">
        <div class="parallax">
          <v-row>
            <v-col cols="4">
              <img src="../assets/icon.png" height="500" alt="">
            </v-col>
            <v-col cols="8">
              this website aaims to promote   
            </v-col>
          </v-row>
        </div>

      </div> -->
        <br>
        <br>
        <br>
        <br>
        
        <v-container>
          <div id="map"></div>
        </v-container>
    </v-content>
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

export default {
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
        html: '',
      },
      {
        text: 'help marawi',
        html: '',
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
    initMap() {
      const map = L.map('map').setView([8.0026, 124.2973], 14);
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

      L.geoJSON(this.first2nd, {
        style: {
            fillColor: 'peachpuff',
            color: 'grey',
            fillOpacity: 0.5,
            weight: 3,
        },
      }).addTo(map)  
      L.geoJSON(this.second).addTo(map)
      L.geoJSON(this.third).addTo(map)
      L.geoJSON(this.fourth).addTo(map)
      L.geoJSON(this.fifth).addTo(map)
      L.geoJSON(this.sixth).addTo(map)
      L.geoJSON(this.seventh).addTo(map)

      first.on('click', () => {
          this.$router.push({ name: 'photogrammetry' })
      })
    },
  }
}
</script>

<style>
#map {
  height: 500px;
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
</style>