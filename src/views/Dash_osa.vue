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
      <v-spacer></v-spacer>
      <v-flex xs12 md4>
      <v-text-field v-model="search" append-icon="search" label="Search"  single-line hide-detail></v-text-field>
      </v-flex>
    </v-card-title>
    <v-data-table :headers="headers" :items="title"  :search="search" class="elevation-1">
    <template v-slot:items="props">
      <td>{{ props.item.evenum }}</td>
       <td class="text-xs-left">{{ props.item.event}}</td>
      <td> {{props.item.organization}}</td>
      
       <td>{{ props.item.college }}</td>
      <td class="text-xs-left">{{ props.item.year}}</td>
      <td class="text-xs-left">{{ props.item.sem}}</td>
      <td class="text-xs-left">{{ props.item.datesub}}</td>
      <td><v-flex xs2 sm4 md2>
      <div class="left">
              <v-chip small :class="`${props.item.stat} white--text my-2 caption`" @click="info">{{ props.item.stat }}</v-chip>
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
import Navbar from '@/components/navbar_osa'

export default{
  name: 'Navbar_OSA',
  components: { Navbar },
  data(){
    return{
      search: '',
      dialog: false,
      headers: [
          {
            text: 'eReserve#',
            align: 'left',
            sortable: true,
            value: 'evenum'
          },
         { text: 'Event Name', value: 'event' },
          { text: 'Organization', value:'organization'},
          
            { text: 'College', value: 'college' },
          { text: 'Academic Year', value: 'year' },
          { text: 'Semester', value: 'sem' },
          { text: 'Date Submitted', value: 'datesub' },
          { text: 'Status', value: 'stat' }
        ],
title: [
{
            evenum:'0001',
             college:'University Wide Organization',
            organization: 'Org One',
            event: 'Event 1',
            year:'2017-2018',
            sem:'2nd Semester',
            datesub:'January 20, 2018',
            stat:' OSA Approved'
          },
          {
            evenum:'0003',
             college:'University Wide Organization',
             organization: 'Org One',
            event: 'Event Name 3',
            year:'2017-2018',
            sem:'2nd Semester',
            datesub:'January 23, 2018',
            stat:'Pending Evaluation'
          },
           {
            evenum:'0004',
             college:'University Wide Organization',
            organization: 'Org One',
            event: 'Event Name 4',
            year:'2017-2018',
            sem:'2nd Semester',
            datesub:'January 23, 2018',
            stat:'Pending Evaluation'
          }
          ]
        }
  },
        methods: {
          close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
          info () {
        alert('Legends:\n \n[OSA Approved] - Event added to database by the O.I.C. of OSA' +
        '\n[Pending Evaluation] - Event report being reviewed by OSA' +
        '\n[For Completion] - Event report returned to Student Organization for recompletion')
      },
  }
   
}
</script>

<style>

.v-chip.Approved{
  background: 4px#64DD17;
}

.v-chip.Endorsed{
  background: 4px #2E7D32;
}

.v-chip.Pending{
  background: 4px #FFC107;
}

.v-chip.Completion{
  background: 4px #D50000;
}


</style>
