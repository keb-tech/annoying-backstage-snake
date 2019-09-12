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
                 <!-- <v-list-tile>
                <v-list-tile-content class="font-weight-bold">Other Organization/s Involved:   
               <v-list-tile-content class="subheading"> {{ project.orgvol }}</v-list-tile-content>
               </v-list-tile-content>
              </v-list-tile>
                <v-divider></v-divider> -->
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
          <v-btn color="primary" to="/studentpartireport_osa">NEXT</v-btn>
          <v-btn color="primary" to="/postER_osa">BACK</v-btn>
          </v-flex>
          </v-layout>
  </v-content>
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