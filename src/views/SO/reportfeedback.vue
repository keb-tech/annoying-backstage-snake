<template>
<v-app class="pa-4">
  <Navbar/>
  <v-content class="mt-4">
  <div class="projects">
     <v-card class="my-auto width:1000px">
    <v-card-title>
    <h1 class="headline font-weight-black pa-2">Feedback</h1><v-spacer></v-spacer>
      <v-flex xs12 md4>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-detail></v-text-field>
      </v-flex></v-card-title>
      <v-divider></v-divider>
     <v-list two-line>
            <template v-for="(item, index) in items">
              <v-list-tile :key="item.projects">
                <v-list-tile-content>
                  <v-list-tile-title>
                  {{ item.title }}
                   </v-list-tile-title>
                   <v-list-tile-title>
                    Remarks: {{item.issue}}
                  </v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn class="pa-2"
                    color="success"
                  >
                    See Report
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider
                v-if="index + 1 < items.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list>
     </v-card>

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
    items: [
        {
            title: 'Event Name 5',
           
           issue: 'Please pass SAAF to SOCC'}
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