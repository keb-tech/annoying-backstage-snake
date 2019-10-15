<template>
<v-app class="pa-4">
  <Navbar/>
  <v-content class="mt-4">
    <v-card class="my-auto width:1000px">
    <v-card-title>
     <h1 class="headline font-weight-black pa-2">Post Event Reports</h1>
      <v-spacer></v-spacer>
      <v-flex xs12 md4>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-detail></v-text-field>
      </v-flex>
      </v-card-title>
<v-divider></v-divider>
 <v-list two-line>
            <template v-for="(item, index) in items">
              <v-list-tile :key="item.title">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.headline }}
                   </v-list-tile-title>
                   <v-list-tile-title>
                    {{item.title}}
                  </v-list-tile-title><v-list-tile-title>
                   {{item.action}}
                  </v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                   <v-btn color="red white--text mr-2 pa-1" @click="snackbar2=true">For Completion</v-btn>
                </v-list-tile-action>

                 <v-list-tile-action>
              <v-btn color="primary mr-2 pa-1" to="/admin/report_osa">See Report</v-btn>
                 </v-list-tile-action>
                  <v-list-tile-action>
                      <v-btn class="pa-2" color="green white--text" @click="snackbar=true">Approve Endorsement</v-btn>
                  </v-list-tile-action>
              </v-list-tile>
              <v-divider
                v-if="index + 1 < items.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list>
       
              
             
            
            
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

          
</v-card>
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
       items: [
        {
          action: 'October 5, 2019',
          headline: 'Student Organization1',
          title: 'Event Name',
        }]
      
    }
  }
}
</script>