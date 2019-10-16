<template>
<v-app class="pa-4">
   <Navbar/>
  <v-content class="mt-4">
    <v-card class="my-auto width:1080px">
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
                   <v-combobox v-model="editedItem.role" :items="roles" label="Role"
                   :rules="inputRules"></v-combobox>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 sm6 md12>
                   <v-combobox v-model="editedItem.organization_type" :items="type" label="Organization Type"
                   :rules="inputRules"></v-combobox>
                </v-flex>
              </v-layout>
               <v-layout>
                <v-flex md12>
                   <v-combobox v-model="editedItem.organization_college" :items="college" label="Organization College"
                   ></v-combobox>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex md12>
                  <v-text-field v-model="editedItem.organization_name" label="Organization Name" :rules="inputRules"></v-text-field>
                </v-flex>
              </v-layout>
             
              <v-layout>
                <v-flex md5>
                  <v-text-field v-model="editedItem.student_number" label="Student Number" :rules="studentnumberrule"></v-text-field>
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
    <v-data-table  :headers="headers" :search="search"  :items="organization_name" class="elevation-1">
      <template v-slot:items="props">
       
        <td class="text-xs-left">{{ props.item.organization_type }}</td>
        <td class="text-xs-left">{{ props.item.organization_name }}</td>
        <td class="text-xs-left">{{ props.item.organization_college }}</td>
        <td class="text-xs-left">{{ props.item.student_number }}</td>
        <td class="text-xs-left">{{ props.item.first_name }}</td>
        <td class="text-xs-left">{{ props.item.last_name }}</td>

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
      roles:['Student Organization', 'Student Organization Coordinating Council'],
        type: ['University-wide Student Organization', 'College-based Student Organization'],
        college: [ 
          'Faculty of Sacred Theology',
          'Faculty of Philosophy',
          'Faculty of Canon Law',
          'Faculty of Medicine and Surgery', 'Faculty of Pharmacy', 'Faculty of Arts and Letters', 'Faculty of Engineering',
          'College of Education', 'College of Science', 'College of Architecture', 'College of Commerce', 'Conservatory of Music',
          'College of Nursing', 'College of Rehabilitation Sciences', 'College of Fine Arts & Design', 'College of Accountancy',
          'College of Tourism and Hospitality Management', 'Institute of Physical Education and Athletics', 'Institute of Information and Computing Sciences'],
      lazy: false,
      search: '',
      valid: "true",
      dialog: false, 
      inputRules: [v => !!v || "This field is required"],
      emailRules: [ v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      studentnumberrule: [
      v => !!v || "This field is required",
      v => /^\d+$/.test(v) || "This field only accept numbers",
      v=>/^[0][1-9]\d{9}$|^[1-9]\d{9}$/.test(v)|| "This field only accepts 10 digits"
    ],
      headers: [
        { text: 'Organization Type', value: 'organization_type' , sortable: true},
        { text: 'Organization Name', align: 'left', sortable: true, value: 'organization_name'},
        { text: 'Organization College', align: 'left', sortable: true, value: 'organization_college'},
        { text: 'Student Number', value: 'student_number' , sortable: false},
        { text: 'First Name', value: 'first_name' , sortable: false},
        { text: 'Last Name', value: 'last_name' , sortable: false}
      ],
      organization_name: [],
      editedIndex: -1,
      editedItem: {
        organization_name:'',
        organization_college:'',
        organization_type: '',
        student_number: '',
        first_name:'',
        last_name: '',
        email: '',
        password:'',
        password_confirmation: '', 
      },
    
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
     
      editItem (item) {
        this.editedIndex = this.organization_name.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.organization_name.indexOf(item)
        confirm('Are you sure you want to delete this?') && this.organization_name.splice(index, 1)
      },
       renewpassItem (item) {
        const index = this.organization_name.indexOf(item)
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
          Object.assign(this.organization_name[this.editedIndex], this.editedItem)
        } else {
          this.organization_name.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>