<template>
<v-app class="pa-4">
  <Navbar/>
   <v-content>
  <div>
      <p></p>
      <p></p>
      <p></p>
    <v-toolbar flat color="white">
      <v-toolbar-title>Student Participants:</v-toolbar-title>
       <v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer>
        <v-flex md4 mt-3>
          <v-text-field v-model="search" append-icon="search" label="Search"  single-line hide-detail></v-text-field>
        </v-flex>
    

      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.studnum" label="Student Number"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.surname" label="Surname Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.fname" label="First Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.mname" label="Middle Initial"></v-text-field>
                </v-flex>
              </v-layout> 
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    
    </v-toolbar>
    
    <v-data-table
      :headers="headers"
      :items="studnum"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:items="props">
        <td>{{ props.item.studnum }}</td>
        <td class="text-xs-left">{{ props.item.surname }}</td>
        <td class="text-xs-left">{{ props.item.fname }}</td>
        <td class="text-xs-left">{{ props.item.mname }}</td>
        <td class="text-xs-left">{{ props.item.involve }}</td>
        <td class="justify-center layout px-0"></td>
      </template>
    </v-data-table>


  <v-layout>
            <v-divider></v-divider>
            <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <v-btn flat @click="back" class="yellow darken-3 white--text mr-3 mt-3" to="/report" >BACK</v-btn>
     <v-btn flat @click="submit" class="green white--text mx-0 mt-3" color="white" to="/papervali">NEXT</v-btn>
    
  </v-layout>
  </div>
  </v-content>
</v-app>
</template>

<script>
import Navbar from '@/components/navbar_socc'

export default{
  name: 'SPReport_SOCC',
  components: { Navbar },
    data: () => ({
      search:'',
      dialog: false,
      headers: [
        {
          text: 'Student Number',
          align: 'left',
          sortable: true,
          value: 'studnum'
        },
        { text: 'Surname', value: 'surname' , sortable: false},
        { text: 'First Name', value: 'fname', sortable: false },
        { text: 'Middle Name', value: 'mname', sortable: false },
        { text: 'Involvement', value: 'involve', sortable: false }
      ],
        studnum: [],
      editedIndex: -1,
      editedItem: {
        studnum: 0,
        surname: '',
        fname: '',
        mname: '',
      },
      defaultItem: {
        studnum: 0,
        surname: '',
        fname: '',
        mname: '',
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Student' : 'Edit Info'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.studnum = [
          {
            studnum: 2015456158,
            surname:'Univ',
            fname:'Tomas',
            mname: 'Street',
            involve: 'Participant'
          },
          {
            studnum: 2015456154,
            surname:'Roque',
            fname:'Ruano',
            mname: 'Sampaloc',
            involve: 'Participant'
          },
          
        ]
      }
    }
  }
</script>