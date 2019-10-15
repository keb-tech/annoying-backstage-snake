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
      :search="search"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.studnum }}</td>
        <td class="text-xs-left">{{ props.item.surname }}</td>
        <td class="text-xs-left">{{ props.item.fname }}</td>
        <td class="text-xs-left">{{ props.item.mname }}</td>
        <td class="justify-center layout px-0"></td>
      </template>
    </v-data-table>
    <v-layout>
      <v-spacer></v-spacer>
    <v-btn flat @click="snackbar2= true" class="red mr-2 mt-3" color="white" >FOR COMPLETION</v-btn>
    <v-btn flat @click="back" class="primary mr-2 mt-3" to="/report_osa" >BACK</v-btn>
    <v-btn flat @click="snackbar = true" class="green mr-2 mt-3" color="white">APPROVE ENDORSEMENT</v-btn>
     </v-layout>
    <v-snackbar
      v-model="snackbar" :bottom="y === 'bottom'" :left="x === 'left'" :multi-line="mode === 'multi-line'" :right="x === 'right'"
      :timeout="timeout" :top="y === 'top'" :vertical="mode === 'vertical'" color="green"> Post-event report added.
      <v-btn dark flat @click="snackbar = false">
        Close</v-btn>
    </v-snackbar>

    <v-snackbar v-model="snackbar2" :bottom="y === 'bottom'" :left="x === 'left'" :multi-line="mode === 'multi-line'" :right="x === 'right'"
      :timeout="timeout" :top="y === 'top'" :vertical="mode === 'vertical'" color="red">
      Post-event report returned for completion.
      <v-btn dark flat @click="snackbar2 = false">
        Close</v-btn>
    </v-snackbar>

  </div>
  </v-content>
</v-app>
</template>

<script>
import Navbar from '@/components/navbar_osa'

export default{
  name: 'SPReport_OSA',
  components: { Navbar },
    data: () => ({
 snackbar: false,
 snackbar2: false,
        y: 'top',
        x: null,
        mode: '',
        timeout: 3000,

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
            mname: 'Street'
          },
          {
            studnum: 2015456154,
            surname:'Roque',
            fname:'Ruano',
            mname: 'Sampaloc'
          },
          
        ]
      }
    }
  }
</script>