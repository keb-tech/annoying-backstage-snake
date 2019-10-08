<template>
<v-app class="pa-4">
<Navbar/>
<v-content class="mt-4">
 <v-card class="my-auto width:1000px">
    <v-card-title>
     <h1 class="headline font-weight-black pa-2">Post-Event Records</h1>
      </v-card-title>
     <v-card-actions>
       <v-flex xs6>
      <v-text-field class="ml-4 mr-4" label="Search" append-icon="search" single-line hide-detail></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex sm3>
        <v-overflow-btn :items="items" label="Search by" editable ></v-overflow-btn>
        </v-flex>
       <div class="flex-grow-1"></div>
      <v-btn color="green white--text" class="ml-3 mb-1" @click="show1" large >Advanced Search</v-btn>
          <v-spacer></v-spacer>
      </v-card-actions>
 </v-card> 
</v-content>
</v-app>
</template>

<script>
import Navbar from '@/components/navbar_socc'
 import format from 'date-fns/format'
export default{
  name: 'Navbar_OSA',
  components: { Navbar },
  data() {
    return {
     show1: false,
      items: ['Event Name', 'eReserve#']
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

