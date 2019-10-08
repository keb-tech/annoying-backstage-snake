<template>
<v-app>
  <Navbar/>
  <v-layout wrap row mt-4 align-center justify-center>
      <v-card class="my-auto pa-4">
      <v-card-title class="display-1 font-weight-medium ml-0">Post-Event Form:</v-card-title>
      <v-form>
      <v-layout row wrap>
     <v-flex md8>
      <v-text-field v-model="event" prepend-icon="event" label="Event Name" required></v-text-field>
     </v-flex>
      <v-spacer></v-spacer>
      <v-flex md3>
      <v-menu>
      <v-text-field :value="formattedDate" :rules="inputRules" slot="activator" label="Start of event date" prepend-icon="date_range"></v-text-field>
      <v-date-picker v-model="start"></v-date-picker>
      </v-menu>
      </v-flex>
      </v-layout>
      <v-layout>
      <v-flex md2>
      <v-text-field v-model="evenum" prepend-icon="info" label="eReserve#" required></v-text-field>
      </v-flex>
                                  <v-flex xs12 md10>    
                                    <v-textarea auto-grow :rules="inputRules" v-model="edescript" outlined prepend-icon="description" rows="1" label="Event Description"></v-textarea>
                                  </v-flex>
                          </v-layout>
      <v-layout>
           <v-flex xs 12 md3>
          <v-text-field v-model="year" prepend-icon="school" label="Academic Year" required></v-text-field>
        </v-flex>
        <v-flex xs12 sm2 d-flex>
        <v-select v-model="sem" :items="items" item-text="sem" label="Semester"></v-select>
        </v-flex>
         <v-flex xs 12 md3>
          <v-text-field v-model="org" prepend-icon="supervisor_account" label="Organizer" required></v-text-field>
        </v-flex>
         <v-flex xs 12 md3>
          <v-text-field v-model="orgvol" label="Organization Involved" prepend-icon="supervisor_account" required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex md3>
          <v-text-field v-model="speaker" prepend-icon="perm_identity" label="Speaker Name" required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 md8>
        <v-textarea auto-grow label="Speaker Affiliation/s" prepend-icon="description" :rules="inputRules" rows="1" outline v-model="speakerAff"></v-textarea></v-flex>
      </v-layout>
     
      <v-card-actions>
      
      <v-btn flat @click="cancel" class="red white--text " @click.stop="dialog=true" >Cancel</v-btn>
       <v-spacer></v-spacer>
      <v-btn flat @click="save" class="warning mr-3" to="/dashboard_so" >Save</v-btn>   
      <div class="flex-grow-1"></div>
      <v-btn flat @click="submit" class="success" to="/studparti" >Next</v-btn>
      
      </v-card-actions>
 
    </v-form>
    </v-card>
 </v-layout>

</v-app>
</template>
  <script>
  import format from 'date-fns/format'
  import Navbar from '@/components/navbar_so'

export default{
  name: 'Navbar_SO',
  components: { Navbar },
  data() {
    return {
      evenum: int,
      event: '',
      start: null,
      end: null,
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
       items: [
         {  sem: '1st Semester' }, 
         {  sem: '2nd Semester'},
         ],
      
    }
  },
   methods: {
    submit() {
      if(this.$refs.form.validate()) {
        console.log(this.evenum, this.event, this.start, this.end, this.edescript, this.year, this.sem, this.org, this.orgvol,
        this.speaker, this.speakerAff)
      }
    }
  },
  computed: {
    formattedDate () {
      console.log(this.start)
      return this.start ? format(this.start, 'Do MMM YYYY') : ''
    },
    formattedDateend () {
      console.log(this.end)
      return this.end ? format(this.end, 'Do MMM YYYY') : ''
    }
    
  }
}
  
</script>

