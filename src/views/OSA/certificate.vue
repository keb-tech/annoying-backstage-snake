<template>
<v-app>
<Navbar/>
<v-content>
 <div id="app">
  <v-app>
      <v-container bg grid-list-lg text-xs-center>
        <v-layout>
          <div class="display-1">
              Student Activity Records
           </div>
           <v-spacer></v-spacer>
        </v-layout>
        <v-layout row align-center wrap>
          <v-flex xs6>
            <v-text-field solo label="Search" append-icon="search" hide-details></v-text-field>
          </v-flex>
           <v-flex xs6 sm3 d-flex>

        <v-overflow-btn :items="items" label="Search by"></v-overflow-btn>
      </v-flex>
      <v-btn color="green white--text" @click="show1" to="/certificateresult">Advanced Search</v-btn>
      
          <!-- <v-btn v-show="!show1" color="green white--text">PRINT</v-btn>
          <v-btn v-show="!show1" color="green white--text">DOWNLOAD</v-btn> -->
      
          <v-spacer></v-spacer>
          
        </v-layout>
      </v-container>  
  </v-app>
   
</div>
</v-content>
</v-app>
</template>

<script>
import Navbar from '@/components/navbar_osa'
 import format from 'date-fns/format'
export default{
  name: 'Navbar_OSA',
  components: { Navbar },
  data() {
    return {
     show1: false,
      items: ['Student Name','Student Number', 'Event Name', 'eReserve#']
    }
  },
  computed: {
    formattedDate () {
      console.log(this.start)
      return this.start ? format(this.start, 'Do MMM YYYY') : ''
    },
    formattedDateend () {
      console.log(this.end)
      return this.end ? format(this.end, 'Do MMM YYYY') : ''
    }
    
  }
}
</script>

