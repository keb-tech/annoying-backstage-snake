<template>
<v-app class="pa-4">

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
     <!-- 
           
        </v-layout>
        <v-layout row align-center wrap>
          
     
      
      -->
          <!-- <v-btn v-show="!show1" color="green white--text">PRINT</v-btn>
          <v-btn v-show="!show1" color="green white--text">DOWNLOAD</v-btn> -->
      
         <!-- <v-spacer></v-spacer>
          
        </v-layout>
      </v-container>  -->
  </v-card>
</v-content>
</v-app>
</template>

<script>

export default{
  name: 'certificate_OSA',
  components: {  },
  data() {
    return {
     show1: false,
      items: ['Student Name','Student Number', 'Event Name', 'eReserve#']
    }
  }
  
}
</script>

