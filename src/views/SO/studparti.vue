<template>
  <v-app class="pa-4">
    <Navbar />
    <v-content>
      <v-card class="my-auto width:1000px">
        <v-card-title>
          <h1 class="headline font-weight-black pa-2">Student Participants</h1>
          <v-spacer></v-spacer>
          <v-flex md4 mt-3>
            <v-text-field
              browser-autocomplete
              class="mx-3"
              flat
              label="Search"
              prepend-inner-icon="search"
              v-model="search"
              single-line
              hide-detail
            ></v-text-field>
          </v-flex>

          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="success" dark class="mb-2" v-on="on">Add Student</v-btn>
            </template>

            <v-card>
              
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <v-form ref="form" :lazy-validation="lazy" v-model="valid">
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout>
                      <v-flex xs6 sm5>
                        <v-select
                          v-model="editedItem.involve"
                          :items="involve"
                          label="Involvement"
                          :rules="inputRules"
                        ></v-select>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex xs12 sm6 md4>
                        <v-text-field
                          v-model="editedItem.studnum"
                          :rules="studentnumberrule"
                          label="Student Number"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex xs12 sm6 md4>
                        <v-text-field
                          v-model="editedItem.surname"
                          :rules="inputRules"
                          label="Surname"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field
                          v-model="editedItem.fname"
                          :rules="inputRules"
                          label="First Name"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.mname" label="Middle Initial"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click="close">CANCEL</v-btn>
                  <v-btn color="blue darken-1" flat @click="save" :disabled="!valid">ADD</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-card-title>
        <v-data-table :headers="headers" :search="search" :items="studnum" class="elevation-1">
          <template v-slot:items="props">
            <td>{{ props.item.studnum }}</td>
            <td class="text-xs-left">{{ props.item.surname }}</td>
            <td class="text-xs-left">{{ props.item.fname }}</td>
            <td class="text-xs-left">{{ props.item.mname }}</td>
            <td class="text-xs-left">{{ props.item.involve }}</td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
              <v-icon small @click="deleteItem(props.item)">delete</v-icon>
            </td>
          </template>
        </v-data-table>

        <v-card-actions>
          <v-btn flat @click="back" class="red white--text mr-3 mt-3" to="/newproject">Back</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat @click="save" class="warning mr-3 mt-3" to="/dashboard_so">Save</v-btn>
          <div class="flex-grow-1"></div>
          <v-btn flat @click="snackbar=true" class="green mt-3" color="white">Submit</v-btn>
        </v-card-actions>

        <v-snackbar
          v-model="snackbar"
          :bottom="y === 'bottom'"
          :left="x === 'left'"
          :multi-line="mode === 'multi-line'"
          :right="x === 'right'"
          :timeout="timeout"
          :top="y === 'top'"
          :vertical="mode === 'vertical'"
          color="green"
        >
          Post-event report submitted.
          <v-btn dark flat @click="snackbar = false">Close</v-btn>
        </v-snackbar>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/navbar_so";

export default {
  name: "Studparti_SO",
  components: { Navbar },
  data: () => ({
    auto: "Participant",
    involve: ["Organizer", "Participant"],
    snackbar: false,
    snackbar2: false,
    
    lazy: false,
    y: "top",
    x: null,
    mode: "",
    search: "",
    timeout: 3000,
    dialog: false,
    valid: "true",
    inputRules: [v => !!v || "This field is required"],
    studentnumberrule: [
      v => !!v || "This field is required",
      v => /^\d+$/.test(v) || "This field only accept numbers"
    ],
    headers: [
      {
        text: "Student Number",
        align: "left",
        sortable: true,
        value: "studnum"
      },
      { text: "Surname", value: "surname", sortable: false },
      { text: "First Name", value: "fname", sortable: false },
      { text: "Middle Name", value: "mname", sortable: false },
      { text: "Involvement", value: "involve", sortable: false }
    ],
    studnum: [],
    editedIndex: -1,
    editedItem: {
      studnum: "",
      surname: "",
      fname: "",
      mname: ""
    },
    defaultItem: {
      studnum: "",
      surname: "",
      fname: "",
      mname: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Student" : "Edit Information";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.studnum = [
        {
          studnum: 2015456158,
          surname: "Univ",
          fname: "Tomas",
          mname: "Street",
          involve: "Participant"
        },
        {
          studnum: 2015456154,
          surname: "Roque",
          fname: "Ruano",
          mname: "Sampaloc",
          involve: "Participant"
        }
      ];
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.valid = true;
      }
    },

    editItem(item) {
      this.editedIndex = this.studnum.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.studnum.indexOf(item);
      confirm("Are you sure you want to delete this?") &&
        this.studnum.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.studnum[this.editedIndex], this.editedItem);
      } else {
        this.studnum.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>