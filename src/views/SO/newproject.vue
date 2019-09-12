<template>
<v-app>
  <Navbar/>

  <v-content>
    <v-layout wrap row mt-2 align-center justify-center>
    <v-card width="1050px" height= "690px">
      <v-card-title class="display-1 font-weight-medium ">Post-Event Form:</v-card-title>
  <v-form>
    <v-container>
      <v-layout row wrap>
          <v-flex md4>
          <v-text-field v-model="event" prepend-icon="event" label="Event Name" required></v-text-field>
        </v-flex>

      <v-flex md3>
          <v-menu
          v-model="showPicker"
          :close-on-content-click="true"
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
          >
          <template v-slot:activator="{ on }">
        <v-text-field
            v-model="selectedDate"
            clearable
            label="Event Date"
            prepend-icon="event"
            readonly
            v-on="on"
        ></v-text-field>
    </template>
    <v-date-picker
        v-model="selectedDate"
        no-title
        @input="showPicker = false"
    ></v-date-picker>
  </v-menu>
          <!-- <v-menu>
            <v-text-field :value="date" slot="activator" label="Date of event" prepend-icon="date_range"></v-text-field>
            <v-date-picker v-model="date"></v-date-picker>
        </v-menu> -->
        </v-flex>
        <v-flex md2>
          <v-text-field v-model="evenum" label="eReserve#" required></v-text-field>
        </v-flex>
        </v-layout>
          <v-layout>
        <v-flex xs12 md6>
        <v-textarea label="Event Description" prepend-icon="description" rows="2" outline :rules="inputRules" v-model="edescript"></v-textarea></v-flex>
      </v-layout>
      <v-layout>
           <v-flex xs 12 md3>
          <v-text-field v-model="year" prepend-icon="school" label="Academic Year" required></v-text-field>
        </v-flex>
        <v-flex xs12 sm2 d-flex>
        <v-select v-model="sem" :items="items" label="Semester"></v-select>
        </v-flex>
         <!-- <v-flex xs 12 md3>
          <v-text-field v-model="org" prepend-icon="supervisor_account" label="Organizer" required></v-text-field>
        </v-flex>
         <v-flex xs 12 md3>
          <v-text-field v-model="orgvol" label="Organization Involved" prepend-icon="supervisor_account" required></v-text-field>
        </v-flex> -->
      </v-layout>
      <v-layout>
        <v-flex md3>
          <v-text-field v-model="speaker" prepend-icon="perm_identity" label="Speaker Name" required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 md6>
        <v-textarea label="Speaker Affiliation/s" prepend-icon="description" :rules="inputRules" rows="2" outline v-model="speakerAff"></v-textarea></v-flex>
      </v-layout>
      <v-btn flat @click="submit" class="success mr-3 mt-3" to="/studparti" >Next</v-btn>
      <v-btn flat @click="cancel" class="error mr-3 mt-3" to="/dashboard_so" >Cancel</v-btn>
      <v-btn flat @click="save" class="warning mr-3 mt-3" to="/dashboard_so" >Save</v-btn>
    </v-container>
  </v-form>
    </v-card>
    </v-layout>
  </v-content>

</v-app>
</template>


<script>
import format from 'date-fns/format'
import Navbar from '@/components/navbar_so'

export default {
name: 'Navbar_SO',
components: { Navbar },
    // data: () => ({
    //     showPicker: false,
    //     selectedDate: null,
    // }),

// export default{

  data() { 
    return {
      evenum: int,
      event: '',
//       // date: '',
      selectedDate: new selectedDate().toISOString().substr(0, 10),
//       // menu1: true,
//       // menu2: true,
      showPicker: false,
      selectedDate: null,
      edescript: '',
      year:'',
      sem:'',
      org:'',
      orgvol:'',
      speaker:'',
      speakerAff:'',
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      //  items: [
      //     '1st Semester', 
      //     '2nd Semester'
      //    ],

    } 
  },
   methods: {
    submit() {
      if(this.$refs.form.validate()) {
        console.log(this.evenum, this.event, this.date, this.end, this.edescript, this.year, this.sem, this.org, this.orgvol,
        this.speaker, this.speakerAff)
      }
    }
  },
  computed: {
    formattedDate () {
      return this.selectedDate ? format(this.selectedDate, 'Do MMMM YYYY') : ''
    },
    items () {
      return [
        '1st Semester', 
        '2nd Semester',
      ]
    },
    
  },
}
  
</script>

