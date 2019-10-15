<template>
<v-app class="pa-4">
  <Navbar/>
  <v-content class="mt-4">
  <v-card class="my-auto width:1000px">
        <v-card-title>
          <h1 class="headline font-weight-black pa-2">Report Feedback</h1>
          <v-spacer></v-spacer>
          <v-flex xs12 md4>
            <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-detail></v-text-field>
          </v-flex>
        </v-card-title>
        <v-divider></v-divider>
        <v-data-table :headers="headers" :items="projectname" :search="search">
        <template v-slot:items="props">
          <td class="text-xs-center">{{ props.item.ereserve }}</td>
          <td class="text-xs-center">{{props.item.name}}</td>
          <td class="text-xs-center">{{ props.item.date }}</td>
          <td class="text-xs-center">{{props.item.remarks}}</td>
         
          <td class="text-xs-right"><v-btn color="success">Edit report</v-btn></td>
        </template>
       
      </v-data-table>
      </v-card>
  </v-content>
</v-app>
</template>

<script>
import Navbar from '@/components/navbar_so'

export default{
  name: 'reportfeedback_SO',
  components: { Navbar },
  data() {
    return {
      search: "",
     headers: [
        {text: 'eReserve#', value:'ereserve', align: 'center', sortable: true},
        {text: 'Event Name', align: 'center', sortable: false, value: 'name'},
        { text: 'Date Submitted', value: 'date',  align: 'center', sortable: true },
        {text: '', value:'', align:'center', sortable: false},
          {text: '', value:'', align:'center', sortable: false}
       ],
      projectname: [
        {
          ereserve:'12345',
          name: 'Event 1',
         date:'2019-05-12'
        }
        ]
    };
  },

}
</script>