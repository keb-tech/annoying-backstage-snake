<template>
<v-app>
  <Navbar/>
  <v-content>
  <div class="drafts">
    <h1 class="headline grey--text pa-3">Saved Drafts</h1>
    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="drafts in drafts" :key="drafts.event">
          <div slot="header" class="py-1">{{ drafts.event }}</div>
          <v-card>
            <v-card-text class="px-2 black--text">
              <div class="font-weight-bold">Date Saved: {{ drafts.date }}</div>
              <div>{{ drafts.content }}</div>
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
      drafts: [
        {
            event: 'Event Name 0',
            date: 'January 18, 2019',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'}
      ]
    }
  },

   computed: {
    myDrafts() {
      return this.pdrafts.filter(drafts=> {
        return drafts.status == 'Denied'
      })
    }
  }
}
</script>