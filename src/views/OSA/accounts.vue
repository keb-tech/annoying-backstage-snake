<template>
<v-app class="pa-4">
   <Navbar/>
  <v-content class="mt-4">
    <v-card class="my-auto width:1000px">
    <v-card-title>
     <h1 class="headline font-weight-black pa-2">Accounts</h1>
      <v-spacer></v-spacer>
      <v-flex md4 mt-3>
          <v-text-field browser-autocomplete class="mx-3" flat label="Search" prepend-inner-icon="search" v-model="search" single-line hide-detail></v-text-field>
        </v-flex>
      
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="success" dark class="mb-2" v-on="on">Add Account</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
           <v-form ref="form" :lazy-validation="lazy" v-model="valid">
          <v-card-text>
            <v-container grid-list-xs>
              <v-layout>
                <v-flex xs12 sm6 md12>
                   <v-combobox v-model="editedItem.college" :items="items" label="College"
                   :rules="inputRules"></v-combobox>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 sm6 md8>
                  <v-text-field v-model="editedItem.orgname" label="Organization Name" :rules="inputRules"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 sm6 md8>
                  <v-text-field v-model="editedItem.orgusername" label="Organization Username" :rules="inputRules"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" :disabled="!valid" flat @click="save">Save</v-btn>
          </v-card-actions>
           </v-form>
        </v-card>
      </v-dialog>
      </v-card-title>
    <v-data-table  :headers="headers" :search="search"  :items="orgname" class="elevation-1">
      <template v-slot:items="props">
          <td class="text-xs-left">{{ props.item.college }}</td>
        <td class="text-xs-left">{{ props.item.orgname }}</td>
        <td class="text-xs-left">{{ props.item.orgusername }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2"  @click="editItem(props.item)">
            edit
          </v-icon>
           <v-icon small  class="mr-2" @click="renewpassItem(props.item)" >
          autorenew
          </v-icon>
          <v-icon small @click="deleteItem(props.item)" >
            delete
          </v-icon>
        </td>
      </template>
      
    </v-data-table>
  </v-card>
  </v-content>
</v-app>
</template>

<script>

import Navbar from '@/components/navbar_osa'
export default{
  name: 'accounts_OSA',
  components: { Navbar },
    data: () => ({
       select: 'University Wide Organization',
        items: [
          'University Wide Organization',
          'Faculty of Sacred Theology',
          'Faculty of Philosophy',
          'Faculty of Canon Law',
          'Faculty of Medicine and Surgery', 'Faculty of Pharmacy', 'Faculty of Arts and Letters', 'Faculty of Engineering',
          'College of Education', 'College of Science', 'College of Architecture', 'College of Commerce', 'Conservatory of Music',
          'College of Nursing', 'College of Rehabilitation Sciences', 'College of Fine Arts & Design', 'College of Accountancy',
          'College of Tourism and Hospitality Management', 'Institute of Physical Education and Athletics', 'Institute of Information and Computing Sciences'
        ],
        lazy: false,
      search: '',
         valid: "true",
      dialog: false, 
      inputRules: [v => !!v || "This field is required"],
      headers: [
        { text: 'College', value: 'college' , sortable: true},
        { text: 'Organization Name', align: 'left', sortable: true, value: 'orgname'},
        { text: 'Organization Username', value: 'orgusername' , sortable: false}
      ],
        orgname: [],
      editedIndex: -1,
      editedItem: {
          college:'',
        orgname: '',
        orgemail: ''
      },
      defaultItem: {
        college: '',
        orgname: '',
        orgemail: ''
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Account' : 'Manage User Account'
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
        this.orgname = [
          {
            orgname: 'Student Organization',
            orgusername:'studorg',
            college:'Student Organization College'
          }
          
        ]
      },
      editItem (item) {
        this.editedIndex = this.orgname.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.orgname.indexOf(item)
        confirm('Are you sure you want to delete this?') && this.orgname.splice(index, 1)
      },
       renewpassItem (item) {
        const index = this.orgname.indexOf(item)
        confirm('Are you sure you want to reset the password?')
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
          Object.assign(this.orgname[this.editedIndex], this.editedItem)
        } else {
          this.orgname.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>