<template>
<v-app>
   <Navbar/>
  <v-content>
  <div>
      <p></p>
      <p></p>
      <p></p>
    <v-toolbar flat color="white">
      <v-toolbar-title>Accounts:</v-toolbar-title>
      <v-spacer></v-spacer>
        <div v-for="user in users" :key ="user.id">
        {{user.name}}
        </div>
    </v-toolbar>
  </div>
  </v-content>
</v-app>
</template>

<script>

import Navbar from '@/components/navbar_osa';
import { mapState } from 'vuex';
export default{
  name: 'Navbar_OSA',
  components: { Navbar },

    computed: {
        ...mapState (['users'])
    },
    mounted(){
        this.$store.dispatch("loadUsers")
    }
}

</script>

