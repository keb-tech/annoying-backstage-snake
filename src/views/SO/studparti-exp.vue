<template>
<v-app>
  <Navbar/>
  <v-content>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Student Participants:</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="success" dark class="mb-2" v-on="on">Add Student</v-btn>
        </template>

        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.studnum" :rules="[v => !!v || 'required']" label="Student Number"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.surname" :rules="[v => !!v || 'required']" label="Surname Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.fname" :rules="[v => !!v || 'required']" label="First Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.mname" label="Middle Initial"></v-text-field>
                </v-flex>
              </v-layout>
            
            </v-container>
            
          </v-card-text>
           <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="studnum"
      class="elevation-1"
    
    >
      <template v-slot:items="props">
        <td>{{ props.item.studnum }}</td>
        <td class="text-xs-left">{{ props.item.surname }}</td>
        <td class="text-xs-left">{{ props.item.fname }}</td>
        <td class="text-xs-left">{{ props.item.mname }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2"  @click="editItem(props.item)">
            edit
          </v-icon>
          <v-icon small @click="deleteItem(props.item)" >
            delete
          </v-icon>
        </td>
      </template>
      
    </v-data-table>
    
    <v-btn flat @click="back" class="success mr-3 mt-3" to="/newproject" >Back</v-btn>
         
     <v-btn flat @click="snackbar=true" class="green mx-0 mt-3" color="white">Submit</v-btn>

<v-snackbar
      v-model="snackbar" :bottom="y === 'bottom'" :left="x === 'left'" :multi-line="mode === 'multi-line'" :right="x === 'right'"
      :timeout="timeout" :top="y === 'top'" :vertical="mode === 'vertical'" color="green"> Post-event report submitted.
      <v-btn dark flat @click="snackbar = false">
        Close</v-btn>
    </v-snackbar>


  </div>
  </v-content>
</v-app>
</template>

<script>
import Navbar from '@/components/navbar_so'

export default{
  name: 'Navbar_SO',
  components: { Navbar },
    data: () => ({
     
      snackbar: false,
    snackbar2: false,
    y: 'top',
        x: null,
        mode: '',
        timeout: 3000,
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
        studnum: int,
        surname: '',
        fname: '',
        mname: '',
      },
      defaultItem: {
        studnum:0,
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
      },

      editItem (item) {
        this.editedIndex = this.studnum.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.studnum.indexOf(item)
        confirm('Are you sure you want to delete this?') && this.studnum.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.studnum[this.editedIndex], this.editedItem)
        } else {
          this.studnum.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>