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
      
      <v-dialog v-model="dialog" max-width="800px">
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
                   <v-combobox v-model="editedItem.organization_type" :items="items" label="Organization Type"
                   :rules="inputRules"></v-combobox>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex md12>
                  <v-text-field v-model="editedItem.organization_name" label="Organization Name" :rules="inputRules"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex md5>
                  <v-text-field v-model="editedItem.student_number" label="Student Number" :rules="inputRules"></v-text-field>
                </v-flex>
                <v-spacer></v-spacer>
                 <v-flex xs12 sm6 md5>
                  <v-text-field v-model="editedItem.email" label="Email" :rules="emailRules"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
              <v-flex md5>
                <v-text-field v-model="editedItem.first_name" label="First Name" :rules="inputRules"></v-text-field>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex md5>
                 <v-text-field v-model="editedItem.password" type="password" label="Password" :rules="inputRules"></v-text-field>
              </v-flex>
              </v-layout>
            <v-layout>
              <v-flex md5>
                <v-text-field v-model="editedItem.last_name" label="Last Name" :rules="inputRules"></v-text-field>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex md5>
                <v-text-field v-model="editedItem.password_confirmation" type="password" label="Confirm Password" :rules="inputRules"></v-text-field>
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
          'College-based Organization'
        ],
        lazy: false,
      search: '',
         valid: "true",
      dialog: false, 
      inputRules: [v => !!v || "This field is required"],
      emailRules: [ v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      headers: [
        { text: 'Organization Type', value: 'organization_type' , sortable: true},
        { text: 'Organization Name', align: 'left', sortable: true, value: 'organization_name'},
        { text: 'Student Number', value: 'student_number' , sortable: false},
        { text: 'First Name', value: 'first_name' , sortable: false},
        { text: 'Last Name', value: 'last_name' , sortable: false}
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