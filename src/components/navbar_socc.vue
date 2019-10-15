<template>
<nav>
<v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" color="black">
<v-toolbar-side-icon class= "white--text" @click.stop="toggleMiniDrawer"></v-toolbar-side-icon>
<v-toolbar-title class="text-uppercase white--text">
<v-btn flat to="/dashboard_socc">
  <h1 class="font-weight-black display-1 white--text" >Activities</h1>
  
</v-btn>
</v-toolbar-title>
<v-spacer></v-spacer>
<h1 class="font-weight-regular title white--text">{{currentUser.last_name + ', ' + currentUser.first_name}}</h1>
</v-toolbar>
 
<v-navigation-drawer :clipped="$vuetify.breakpoint.width > 1264" :fixed="drawer.fixed" :permanent="drawer.permanent" :mini-variant="drawer.mini" width="250" v-model="drawer.open"
      app class="yellow lighten-1">
 <v-layout column align-center>
</v-layout>

<v-list>
  <v-flex class="mt-2">
<v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
    <v-list-tile-action>
        <v-icon class="black--text" > {{link.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="black--text">{{link.text}}</v-list-tile-title>
        
    </v-list-tile-content>


</v-list-tile>
</v-flex>
</v-list>
</v-navigation-drawer>
</nav>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex';

export default {
    
    data(){
        return{
            drawer: {
      // sets the open status of the drawer
      open: true,
      // sets if the drawer is shown above (false) or below (true) the toolbar
      clipped: false,
      // sets if the drawer is CSS positioned as 'fixed'
      fixed: true,
      // sets if the drawer remains visible all the time (true) or not (false)
      permanent: true,
      // sets the drawer to the mini variant, showing only icons, of itself (true) 
      // or showing the full drawer (false)
      mini: true
    },
    toolbar: {
      //
      fixed: true,
      // sets if the toolbar contents is leaving space for drawer (false) or not (true)
      clippedLeft: true
    },
            show:true,
            links: [
                {icon: 'dashboard', text: 'Dashboard', route: '/dashboard_socc'},
                {icon: 'notifications', text: 'Post-Event Reports', route:'/postER_socc'},
                {icon: 'search', text: 'Search', route:'/searchfile'},
                {icon: 'lock', text: 'Change Password', route:'/Password_socc'},
                {icon: 'exit_to_app', text: 'Sign Out', route: '/login'}
            ]
            
        }
    }
    ,
    methods: {
    toggleMiniDrawer () {
      this.drawer.mini = !this.drawer.mini
    },
    logoutUser () {
        this.$store.dispatch("logoutUser");
      }
      },
    computed: {
      ...mapState(['currentUser'])
    }
};

</script>
