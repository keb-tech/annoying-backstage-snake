<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
        <navbar/>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md5>
            <v-card class="elevation-12">
              <v-toolbar dark color="red">
                <v-toolbar-title>Change Password?</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-flex sm12>
          <v-text-field
          prepend-icon="lock_open"
            :append-icon="show3 ? 'visibility' : 'visibility_off'" :rules="[rules.required, rules.min]" :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="Current password"
            hint="At least 8 characters"
            value=""
            class="input-group--focused"
            @click:append="show3 = !show3"
          ></v-text-field>
                  </v-flex>
                  
                  <v-flex sm12>
          <v-text-field
          prepend-icon="lock"
            :append-icon="show3 ? 'visibility' : 'visibility_off'" :rules="[rules.required, rules.min]" :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="New password"
            hint="At least 8 characters"
            value=""
            class="input-group--focused"
            @click:append="show3 = !show3"
          ></v-text-field>
                  </v-flex>
                <v-flex sm12>
          <v-text-field
          prepend-icon="lock"
            :append-icon="show3 ? 'visibility' : 'visibility_off'" :rules="[rules.required, rules.min]" :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="Confirm new password"
            hint="At least 8 characters"
            value=""
            class="input-group--focused"
            @click:append="show3 = !show3"
          ></v-text-field>
                  </v-flex>
                
                
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="ml-2" color="red white--text">Cancel</v-btn> <v-btn color="green white--text">Change</v-btn> 
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>
<script>
 import Navbar from '@/components/navbar_so'

export default {
    name: 'Navbar_SO',
  components: { Navbar },
    data(){
        return{
               
        show3: false,
       
        password: 'Password',
        rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters'},
        drawer: null,
        props:{
        source: String
            }
        }
    }
}
</script>
<style>
#inspire {
     /*background-image: url('../assets/hands_joined_team.jpeg');*/
     background-color: #E0E0E0; 
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
</style>

