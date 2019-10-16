<template>
<nav>
<v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" color="black">
<v-toolbar-side-icon class= "white--text" @click.stop="toggleMiniDrawer"></v-toolbar-side-icon>
<v-toolbar-title class="text-uppercase white--text" >
<v-btn flat to="/dashboard">
  <h1 class="font-weight-black display-1 white--text" >Activities</h1>
  
</v-btn>
</v-toolbar-title>
<v-spacer></v-spacer>
<h1 class="font-weight-regular title white--text">{{currentUser.last_name + ', ' + currentUser.first_name}}</h1>
</v-toolbar>
 
<v-navigation-drawer :clipped="$vuetify.breakpoint.width > 1264" :fixed="drawer.fixed" :permanent="drawer.permanent" :mini-variant="drawer.mini" :width="250" v-model="drawer.open"
      app class="yellow lighten-1"> 
 <v-layout column align-center>    
 </v-layout>


<!-- Navbar icons starts here -->

<!-- SO  -->

<v-list>
    <v-flex class="mt-2">
<v-list-tile to="/dashboard">
    <v-list-tile-action>
      <v-icon class="black--text">dashboard</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="black--text">Dashboard</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>

<div v-if= "currentUser.role_id === 1">
<v-list-tile to="/org/Projects">
    <v-list-tile-action>
      <v-icon class="black--text">folder</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="black--text">Projects</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>

<v-list-tile to="/org/saveddrafts">
    <v-list-tile-action>
      <v-icon class="black--text">edit</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="black--text">Drafts</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>

<v-list-tile to="/org/reportfeedback">
    <v-list-tile-action>
      <v-badge overlap left color="red" small v-model="show"><span slot="badge">1</span>
      <v-icon class="black--text">feedback</v-icon>
      </v-badge>
         </v-list-tile-action>
        <v-list-tile-content >
        <v-list-tile-title class="black--text">Report Feedback</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>
</div>

<!-- SOCC  -->
<div v-if= "currentUser.role_id === 2">
<v-list-tile to="/socc/postER_socc">
    <v-list-tile-action>
      <v-icon class="black--text">notifications</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="black--text">Post-Event Reports</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>

<v-list-tile to="/socc/searchfile">
    <v-list-tile-action>
      <v-icon class="black--text">search</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="black--text">Search</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>
</div>

<!-- OSA -->
<div v-if= "currentUser.role_id === 3">
<v-list-tile to="/admin/postER_osa">
    <v-list-tile-action>
      <v-badge overlap left color="red" small v-model="show"><span slot="badge">1</span>
      <v-icon class="black--text">notifications</v-icon>
      </v-badge>
         </v-list-tile-action>
        <v-list-tile-content >
        <v-list-tile-title class="black--text">Notifications</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>

<v-list-tile to="/admin/accounts">
    <v-list-tile-action>
      <v-icon class="black--text">group_add</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="black--text">Accounts Management</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>
<v-list-tile to="/admin/certificate">
    <v-list-tile-action>
      <v-icon class="black--text">search</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="black--text">Search</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>
</div>

<!-- General -->

<v-list-tile to="/Password_so">
    <v-list-tile-action>
      <v-icon class="black--text">lock</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="black--text">Change Password</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>


<v-list-tile @click="logoutUser">
    <v-list-tile-action>
      <v-icon class="black--text">exit_to_app</v-icon>
         </v-list-tile-action>
        <v-list-tile-content >
        <v-list-tile-title class="black--text">Sign Out</v-list-tile-title>
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
        clipped: true,
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
      }
    }
    },
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
