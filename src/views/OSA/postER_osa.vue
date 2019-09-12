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
              <v-btn color="primary" to="/report_osa">See Report</v-btn>
              <v-btn color="green white--text" @click="snackbar=true">Approve Endorsement</v-btn>
              <v-btn color="red white--text" @click="snackbar2=true">For Completion</v-btn>

              <v-snackbar
      v-model="snackbar" :bottom="y === 'bottom'" :left="x === 'left'" :multi-line="mode === 'multi-line'" :right="x === 'right'"
      :timeout="timeout" :top="y === 'top'" :vertical="mode === 'vertical'" color="green"> Post-event report added.
      <v-btn dark flat @click="snackbar = false">
        Close</v-btn>
    </v-snackbar>

    <v-snackbar v-model="snackbar2" :bottom="y === 'bottom'" :left="x === 'left'" :multi-line="mode === 'multi-line'" :right="x === 'right'"
      :timeout="timeout" :top="y === 'top'" :vertical="mode === 'vertical'" color="red">
      Post-event report returned for completion.
      <v-btn dark flat @click="snackbar2 = false">
        Close</v-btn>
    </v-snackbar>

            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
</v-expansion-panel>
  
  </v-container>
  </v-content>
</v-app>
</template>
<script>
import Navbar from '@/components/navbar_osa'

export default{
  name: 'Navbar_OSA',
  components: { Navbar },
  data() {
    return {
      snackbar: false,
      snackbar2: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 3000,
      projects: [
        { title: 'Event Name 3', organization: 'Org One', submit: 'January 23, 2018' }
      ]
    }
  }
}
</script>