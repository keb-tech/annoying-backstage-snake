<template>
 <nav>
<v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" color="black"
>
<v-toolbar-side-icon class="white--text"  @click.stop="toggleMiniDrawer"></v-toolbar-side-icon>
<v-toolbar-title>
<v-btn flat to="/dashboard_osa">
  <h1 class="font-weight-black display-1 white--text" >Activities</h1>
</v-btn>
</v-toolbar-title>
<v-spacer></v-spacer>
<h1 class="font-weight-regular title white--text">{{currentUser.last_name + ', ' + currentUser.first_name}}</h1>
</v-toolbar>

<v-navigation-drawer :clipped="$vuetify.breakpoint.width > 1264" :fixed="drawer.fixed" :permanent="drawer.permanent" :mini-variant="drawer.mini" width="250" v-model="drawer.open"
      app class="yellow darken-3">
 <v-layout column align-center>

</v-layout>
<v-list>
  <v-flex class="mt-2">

<v-list-tile to="/dashboard_osa">
    <v-list-tile-action>
      <v-icon class="white--text">dashboard</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="white--text">Dashboard</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>

<v-list-tile to="/postER_osa">
    <v-list-tile-action>
      <v-badge overlap left color="red" small v-model="show"><span slot="badge">1</span>
      <v-icon class="white--text">notifications</v-icon>
      </v-badge>
         </v-list-tile-action>
        <v-list-tile-content >
        <v-list-tile-title class="white--text">Notifications</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>

<v-list-tile to="/accounts">
    <v-list-tile-action>
      <v-icon class="white--text">group_add</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="white--text">Accounts Management</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>

<v-list-tile to="/usersList">
    <v-list-tile-action>
      <v-icon class="white--text">group_add</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="white--text">Users List</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>

<v-list-tile to="/certificate">
    <v-list-tile-action>
      <v-icon class="white--text">search</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="white--text">Search</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>

<v-list-tile to="/Password_osa">
    <v-list-tile-action>
      <v-icon class="white--text">lock</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="white--text">Change Password</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>




<v-list-tile @click="logoutUser">
    <v-list-tile-action>
      <v-icon class="white--text">exit_to_app</v-icon>
         </v-list-tile-action>
        <v-list-tile-content >
        <v-list-tile-title class="white--text">Sign Out</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>
</v-flex>
</v-list>
</v-navigation-drawer>
</nav>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
      ...mapState(['currentUser'])
    },
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
    }
    },
    methods: {
    toggleMiniDrawer () {
      this.drawer.mini = !this.drawer.mini
    },
    logoutUser () {
      this.$store.dispatch("logoutUser");
    }
    }
}
    
</script>
