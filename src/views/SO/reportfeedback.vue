<template>
<v-app>
  <Navbar/>
  <v-content>
  <div class="projects">
    <h1 class="headline grey--text pa-3">Feedback</h1>
    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in projects" :key="project.event">
          <div slot="header" class="py-1">{{ project.event }}</div>
          <v-card>
            <v-card-text class="px-2 black--text">
              <div class="font-weight-bold">Remarks:</div>
              <div>{{ project.content }}</div>
              <div> <v-btn color="green white--text" @click="edit">Edit Report</v-btn> </div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
    


  </div>
  </v-content>
</v-app>
</template>

<script>
import Navbar from '@/components/navbar_so'

export default{
  name: 'Navbar_SO',
  components: { Navbar },
  data() {
    return {
      projects: [
        {
            event: 'Event Name 5',
            stat:'Denied',
           content: 'Please pass SAAF to SOCC'}
      ]
    }
  },

   computed: {
    myProjects() {
      return this.projects.filter(project=> {
        return project.status == 'Denied'
      })
    }
  }
}
</script>