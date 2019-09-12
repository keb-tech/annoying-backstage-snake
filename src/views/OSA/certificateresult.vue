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
      <v-btn color="green white--text" @click="show1">Advanced Search</v-btn>
      
          <!-- <v-btn v-show="!show1" color="green white--text">PRINT</v-btn>
          <v-btn v-show="!show1" color="green white--text">DOWNLOAD</v-btn> -->
           <v-layout>
    <v-flex xs12 sm11>
      <v-card>
        <v-card-title primary-title>
         <div>
            <h1> 2014545878</h1>
            <h3 class="headline ml-0 mb-0">Doe, John I. </h3>
</div>
       
        </v-card-title>
 <v-data-table :headers="headers" :items="title" class="elevation-1">
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.evenum }}</td>
        <td class="text-xs-left">{{ props.item.year }}</td>
        <td class="text-xs-left">{{ props.item.eventname }}</td>
        <td class="text-xs-left">{{ props.item.organizedby }}</td>
        <td class="text-xs-left">{{ props.item.involvement }}</td>
     
         
     
         </template>
    </v-data-table>
        <v-card-actions>
          <v-spacer></v-spacer>
         <v-btn color="green white--text" @click="downloadWithAxios">Print</v-btn>
          <v-btn color="green white--text">Send to Email</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
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
import axios from 'axios'

export default{
  name: 'Navbar_OSA',
  components: { Navbar },
  data() {
    return {
     url: 'https://78.media.tumblr.com/tumblr_m39nv7PcCU1r326q7o1_500.png',
     show1: false,
      items: ['Student Name','Student Number', 'Event Name', 'eReserve#'],
      headers: [
        {
          text: 'Event',
          align: 'left',
          sortable: true,
          value: 'eventname'
        },
        { text: 'Involvement', value: 'involvement' },
         { text: 'Academic Year', value: 'year' },
          { text: 'Organized by', value: 'organizedby' },
           { text: 'e-Reserve#', value: 'evenum' },
       

],
title: [
{
           eventname:'Accounting Level Up: A Seminar in Basic Accounting Techniques ',
           involvement:'Participant',
          year:'2018-2019',
            organizedby:'Information Systems Society',
            evenum:'15487'
      
      }],

  computed: {
    formattedDate () {
      console.log(this.start)
      return this.start ? format(this.start, 'Do MMM YYYY') : ''
    },
    formattedDateend () {
      console.log(this.end)
      return this.end ? format(this.end, 'Do MMM YYYY') : ''
    },
  },

  methods: {  
    forceFileDownload(response){
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'file.png') //or any other extension
      document.body.appendChild(link)
      link.click()
    },
    
    downloadWithAxios(){
      axios({
        method: 'get',
        url: this.url,
        responseType: 'arraybuffer'
      })
      .then(response => {
        
        this.forceFileDownload(response)
        
      })
      .catch(() => console.log('error occured'))
    }
    } 
  }
  }
}   
</script>