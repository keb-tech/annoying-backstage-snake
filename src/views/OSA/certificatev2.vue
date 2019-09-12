<v-layout>
            <v-flex xs11>
    <v-card>
    <v-card-title>
     <h1 class="headline font-weight-black pa-2">Search Result</h1>
      <v-spacer></v-spacer>
      <v-flex xs12 md4>
      <v-text-field v-model="search" append-icon="search" label="Search"  single-line hide-detail></v-text-field>
      </v-flex>
    </v-card-title>
       <v-data-table :headers="headers" :items="title" class="elevation-1">
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.studnum }}</td>
        <td class="text-xs-left">{{ props.item.surname }}</td>
        <td class="text-xs-left">{{ props.item.fname }}</td>
        <td class="text-xs-left">{{ props.item.mname }}</td>
     
         </template>
    </v-data-table>
    </v-card>
    </v-flex>
    </v-layout>


    headers: [
        {
          text: 'Student Number',
          align: 'left',
          sortable: true,
          value: 'studnum'
        },
        { text: 'Last Name', value: 'surname' },
        { text: 'First Name', value: 'fname' },
        { text: 'Middle Initial', value: 'mname' }

],
title: [
{
           studnum:'2014545878',
           surname:'Doe',
           fname:'John',
           mname:'I.'
          }]

  }