<template>
<v-app class="pa-4">
  <Navbar/>
  <v-layout wrap row mt-4 align-center justify-center>
      <v-card class="my-auto pa-4">
      <v-card-title class="display-1 font-weight-medium ml-0">Post-Event Form:</v-card-title>
      <v-form>
      <v-layout row wrap>
     <v-flex md8>
      <v-text-field  prepend-icon="event" label="Event Name" readonly value="Event number 1"></v-text-field>
     </v-flex>
      <v-spacer></v-spacer>
      <v-flex md3>
      <v-menu>
      <v-text-field value="October 21, 2019" readonly slot="activator" label="Start of event date" prepend-icon="date_range"></v-text-field>
     
      </v-menu>
      </v-flex>
      </v-layout>
      <v-layout>
      <v-flex md2>
      <v-text-field  prepend-icon="info" label="eReserve#" value="123456" readonly required></v-text-field>
      </v-flex>
                                  <v-flex xs12 md10>    
                                    <v-textarea auto-grow readonly value="Event descriptionnnn" outlined prepend-icon="description" rows="1" label="Event Description"></v-textarea>
                                  </v-flex>
                          </v-layout>
      <v-layout>
           <v-flex xs 12 md3>
          <v-text-field  prepend-icon="school" readonly value="2018-2019" label="Academic Year" ></v-text-field>
        </v-flex>
        <v-flex xs12 sm2 d-flex>
        <v-text-field readonly prepend-icon="menu_book" value="1st Semester" label="Semester"></v-text-field>
        </v-flex>
         <v-flex xs 12 md3>
          <v-text-field class="ml-2" readonly prepend-icon="supervisor_account" label="Organizer" required></v-text-field>
        </v-flex>
         <v-flex xs 12 md3>
          <v-text-field label="Organization Involved" prepend-icon="supervisor_account" required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex md3>
          <v-text-field prepend-icon="perm_identity"  readonly label="Speaker Name" value="John Doe"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 md8>
        <v-textarea auto-grow label="Speaker Affiliation/s"  readonly value= " CEO of Doe Company" prepend-icon="description" :rules="inputRules" rows="1" ></v-textarea></v-flex>
      </v-layout>
     
      <v-card-actions>
       <v-spacer></v-spacer>
       <v-btn flat @click="cancel" class="red white--text mr-3" @click.stop="dialog=true" to="/postER_osa">Cancel</v-btn>   
      <div class="flex-grow-1"></div>
      <v-btn flat @click="submit" class="success" to="/studentpartireport_osa" >Next</v-btn>
      
      </v-card-actions>
 
    </v-form>
    </v-card>
 </v-layout>
 
</v-app>
</template>

<script>
import Navbar from '@/components/navbar_osa'

export default{
  name: 'Navbar_OSA',
  components: { Navbar },
    data(){
        return{
            projects:[
          { evenum: '0003',
            event: 'Event Name 3',
            start: 'December 28, 2017',
            edescript: 'This is a short description',
            year:'2017-2018',
            sem:'1st Semester',
            org:'Org One',
            orgvol:'none',
            speaker:'Mr. Workshop Speaker',
            speakeraff:'CEO at The Speaker Company'
           }
            ]
        }
    }
}
</script>