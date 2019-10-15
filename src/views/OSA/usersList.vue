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
        <div v-for="users in users" :key ="users.id">
        {{users.first_name}}
        </div>
    </v-toolbar>
  </div>
  </v-content>
</v-app>
</template>

<script>

import Navbar from '@/components/navbar_so';
import { mapState } from 'vuex';
export default{
  name: 'Navbar_SO',
  components: { Navbar },

    computed: {
        ...mapState (['users'])
    },
    mounted(){
        this.$store.dispatch("loadUsers")
    }
}

</script>

