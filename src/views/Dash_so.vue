<template>
<v-app>
  <Navbar/>
<v-content>

<div>
<p></p>
<p></p>


<v-card>
    <v-card-title>
     <h1 class="headline font-weight-black pa-2">Dashboard</h1>
     <v-btn flat @click="submit" class="success my-3" to="/newproject" >Add Project</v-btn>
      <v-spacer></v-spacer>
      <v-flex xs12 md4>
      <v-text-field v-model="search" append-icon="search" label="Search"  single-line hide-detail></v-text-field>
      </v-flex>
    
   
   </v-card-title>
<v-data-table :headers="headers" :items="title" :search="search" class="elevation-1">
      <template v-slot:items="props">
      <td>{{ props.item.evenum }}</td>
      <td class="text-xs-left">{{ props.item.event}}</td>
      <td class="text-xs-left">{{ props.item.year}}</td>
      <td class="text-xs-left">{{ props.item.sem}}</td>
      <td class="text-xs-left">{{ props.item.datesub}}</td>
      <td><v-flex xs2 sm4 md2>
      <div class="left">

      <!-- <div class= "text-center">
        <v-tooltip top>
          <template v-slot:activator="{ on }"> -->

            <v-chip small :class="`${props.item.stat} white--text my-2 caption`" @click="info">{{ props.item.stat }} </v-chip>
         
          <!-- </template>
          <span>This is a tooltip</span>
        </v-tooltip>
      </div> -->


      </div>
      </v-flex>
      </td>
      <td class="justify-center layout px-0">
      </td>
      </template>
      </v-data-table>  
</v-card>
</div>
</v-content>
</v-app>
</template>

<script>
import Navbar from '@/components/navbar_so'

export default{
  methods: {
      info () {
        alert('Legends:\n \n[OSA Approved] - Event added to database by the O.I.C. of OSA' +
        '\n[OSA Processing] - Event report being reviewed by OSA' +
        '\n[SOCC Processing] - Event report being reviewed by SOCC' +
        '\n[For Completion] - Event report returned to Student Organization for recompletion')
      },
  },
  name: 'Navbar_SO',
  components: { Navbar },
  data(){
    return{
      search:'',
      headers: [
          {
            text: 'eReserve#',
            align: 'left',
            sortable: true,
            value: 'evenum'
          },
          
          { text: 'Event Name', value: 'event' },
          { text: 'Academic Year', value: 'year' },
          { text: 'Semester', value: 'sem' },
          { text: 'Date Submitted', value: 'datesub' },
          { text: 'Status', value: 'stat' }
        ],
      title: [
          {
            evenum:'0001',
           
            event: 'Event Name 1',
            year:'2017-2018',
            sem:'2nd Semester',
            datesub:'January 20, 2018',
            stat:'OSA Approved'
          },
          {
            evenum:'0002',
            
            event: 'Event Name 2',
            year:'2017-2018',
            sem:'2nd Semester',
            datesub:'January 23, 2018',
            stat:'SOCC Processing'
          },
          {
            evenum:'0003',
           
            event: 'Event Name 3',
            year:'2017-2018',
            sem:'2nd Semester',
            datesub:'January 23, 2018',
            stat:'OSA Processing'
          },
           {
            evenum:'0004',
             
            event: 'Event Name 4',
            year:'2017-2018',
            sem:'2nd Semester',
            datesub:'January 23, 2018',
            stat:' OSA Processing'
          },
          {
            evenum:'0005',
             
            event: 'Event Name 5',
            year:'2017-2018',
            sem:'2nd Semester',
            datesub:'January 19, 2018',
            stat:'For Completion'
          },
          ]
        }   
      },
    mounted() {
    fetch( "http://127.0.0.1:8000/api/events",
    { 
      method:'get', 
      headers: {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2OTgyNDg3NCwiZXhwIjoxNTY5ODYwODc0LCJuYmYiOjE1Njk4MjQ4NzQsImp0aSI6IlE4d3VWeDhpTW5VYUdlcjciLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.0d_ZGH_O5nV-QDRr794xjFHQCIYWtHcxMM14Jcr0MtE"} })
      .then(function(response){return(response.json())})
      .then(function(data){console.log(data)});
    }
}
</script>

<style>
.title.Approved{
  border-left: 4px solid #8BC34A
}

.title.Processing{
  border-left: 4px solid orange
}

.title.Completion{
  border-left: 4px solid #D50000
}

.v-chip.Approved{
  background: 4px #8BC34A
}

.v-chip.Processing{
  background: 4px orange
}

.v-chip.Completion{
  background: 4px #D50000
}

</style>
