<template>
<v-app class="pa-4">

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

export default{
  name: 'search_SOCC',
  components: {  },
  data() {
    return {
     show1: false,
      items: ['Event Name', 'eReserve#']
    }
  },
 
  
}
</script>

