<template>
<v-app
id="inspire">
<nav>
<v-toolbar app :fixed="toolbar.fixed" :clipped="$vuetify.breakpoint.width > 1214">
<v-toolbar-side-icon clipped-left class= "black--text" @click.stop="toggleMiniDrawer"></v-toolbar-side-icon>
<v-toolbar-title class="text-uppercase black--text">
<span><v-btn flat class="font-weight-black display-1" to="/dashboard_so">
    Activities</v-btn></span>
</v-toolbar-title>
<v-spacer></v-spacer>
<h1 class="font-weight-regular title">S.O.</h1>
</v-toolbar>
 
<v-navigation-drawer :clipped="$vuetify.breakpoint.width > 1214" :fixed="drawer.fixed" :permanent="drawer.permanent" :mini-variant="drawer.mini" v-model="drawer.open"
      app class="primary"> 
 <v-layout column align-center>    
 </v-layout>

<v-list>
    <v-flex class="mt-5">
<v-list-tile to="/dashboard_so">
    <v-list-tile-action>
      <v-icon class="white--text">home</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="white--text">Home</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>

<v-list-tile to="/projects">
    <v-list-tile-action>
      <v-icon class="white--text">folder</v-icon>
         </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title class="white--text">Projects</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>

<v-list-tile to="/reportfeedback">
    <v-list-tile-action>
      <v-badge overlap left color="red" small v-model="show"><span slot="badge">1</span>
      <v-icon class="white--text">feedback</v-icon>
      </v-badge>
         </v-list-tile-action>
        <v-list-tile-content >
        <v-list-tile-title class="white--text">Report Feedback</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>
<v-list-tile to="/login">
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
</v-app>
</template>

<script>
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
      clippedLeft: false
    }
        }
    },
    methods: {
    toggleMiniDrawer () {
      this.drawer.mini = !this.drawer.mini
    }
    }
}
</script>
