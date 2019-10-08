<template>
<v-app class="pa-4">
<Navbar/>
<v-content class="mt-4">
 <v-card class="my-auto width:1000px">
    <v-card-title>
     <h1 class="headline font-weight-black pa-2 mr-4">Student Activity Records</h1>
      <v-flex md5>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-detail></v-text-field>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex sm2>
      <v-overflow-btn class="ml-3 mr-2" height="35px" editable :items="items" label="Search by"></v-overflow-btn>
      </v-flex>
        <div class="flex-grow-1"></div>
      <v-flex>
      <v-btn color="green white--text" class="ml-3 mt-0" @click="show1" height="35px" to="/certificateresult">Advanced Search</v-btn></v-flex>
      </v-card-title>
          <!-- <v-btn v-show="!show1" color="green white--text">PRINT</v-btn>
          <v-btn v-show="!show1" color="green white--text">DOWNLOAD</v-btn> -->
           <v-layout>
    <v-flex sm12>
      <v-card class="my-auto width:1000px">
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
        <td class="text-xs-left">{{ props.item.involvement}}</td>
         </template>
    </v-data-table>
        <v-card-actions>
          <v-spacer></v-spacer>
       
          <v-btn color="yellow darken-3 white--text">Send to Email</v-btn>
            <v-btn color="green white--text">Print</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
 </v-card>
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
          }]

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
    
  },




}
</script>

