<template>
<v-app>
  <Navbar/>
  <v-content>
 <v-layout wrap row mt-4>
    <v-flex xs12 md6 v-for="project in projects" :key="project.event" offset-sm3>
    <v-card>
         <v-card-title><h1>{{ project.event }}</h1></v-card-title>
            <v-divider></v-divider>
            <v-list>
            <v-list-tile>
               <v-list-tile-content class="font-weight-bold">Organization:
               <v-list-tile-content class="subheading">{{ project.org }}</v-list-tile-content>
                </v-list-tile-content> 
              </v-list-tile>
                <v-divider></v-divider>
                 <v-list-tile>
                <v-list-tile-content class="font-weight-bold">Other Organization/s Involved:   
               <v-list-tile-content class="subheading"> {{ project.orgvol }}</v-list-tile-content>
               </v-list-tile-content>
              </v-list-tile>
                <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content class="font-weight-bold">eReserve#: 
                 <v-list-tile-content class="subheading">{{ project.evenum }}</v-list-tile-content>
                 </v-list-tile-content>
              </v-list-tile>
                <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content class="font-weight-bold">Date start: 
                  <v-list-tile-content class="subheading"> {{ project.start }}</v-list-tile-content>
                  </v-list-tile-content>
              </v-list-tile>
                <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content class="font-weight-bold">Date of conclusion: 
                <v-list-tile-content class="subheading">{{ project.end }}</v-list-tile-content>
                  </v-list-tile-content>
              </v-list-tile>
                <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content class="font-weight-bold">Event Description: 
                <v-list-tile-content class="subheading">  {{ project.edescript }}</v-list-tile-content>
                </v-list-tile-content>
              </v-list-tile>
                <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content class="font-weight-bold">Academic Year: 
                 <v-list-tile-content class="subheading">  {{ project.year }}/{{ project.sem }}</v-list-tile-content>
                 </v-list-tile-content>
              </v-list-tile>
                <v-divider></v-divider>
             
               <v-list-tile>
                <v-list-tile-content class="font-weight-bold">Speaker: 
                  <v-list-tile-content class="subheading">{{ project.speaker }}</v-list-tile-content>
                  </v-list-tile-content>
              </v-list-tile>
                <v-divider></v-divider>
               <v-list-tile>
                <v-list-tile-content class="font-weight-bold">Speaker Affiliation: 
                  <v-list-tile-content class="subheading">{{ project.speakeraff }}</v-list-tile-content>
                  </v-list-tile-content>
              </v-list-tile>
              </v-list>
                
          </v-card>
          <v-btn color="primary" to="/postER_socc">BACK</v-btn>
          <v-btn color="primary" to="/studentpartireport_socc">NEXT</v-btn>
          </v-flex>
          </v-layout>
  </v-content>
</v-app>
</template>

<script>
import Navbar from '@/components/navbar_socc'

export default{
  name: 'Navbar_SOCC',
  components: { Navbar },
    data(){
        return{
            projects:[
           { evenum: 210154,
            event: 'Designing a website in the 21st',
            start: '25th May, 2019',
            end: '27th May, 2019',
            edescript: 'Seminar for new tools in designing',
            year:'2018-2019',
            sem:'2nd Semester',
            org:'ISS',
            orgvol:'none',
            speaker:'Mr. Box In',
            speakeraff:'Awarded as Web Application Designer of the Year '
           }
            ]
        }
    }
}
</script>

 <!--return {
      ,-->