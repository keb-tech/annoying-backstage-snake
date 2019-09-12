<template>
<v-app>
  <Navbar/>
  <v-content>
<v-container md12 mt4>
<h1>Post Event Reports</h1>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in projects" :key="project.title">
          <div slot="header" class="font-weight-bold">{{ project.title }}</div>
          <v-card>
            <v-card-text class="ml-1 black--text">
              <div class="font-weight-regular">Organization: {{ project.organization }}</div>
              <div class="font-weight-regular">Date Received: {{ project.submit }}</div>
              <v-btn color="primary" to="/report">See Report</v-btn>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
</v-expansion-panel>
  
  </v-container>
  </v-content>
</v-app>
</template>
<script>
import Navbar from '@/components/navbar_socc'

export default{
  name: 'Navbar_SOCC',
  components: { Navbar },
  data() {
    return {
      projects: [
        { title: 'Even Name 2', organization: 'Org One', submit: 'Jan 20, 2018' }
      ]
    }
  }
}
</script>