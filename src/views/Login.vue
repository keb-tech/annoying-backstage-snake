<template>
<div id="background">
  <v-img src="/Archblack.JPG" height="753px" width="1550px" class="ml-0"> 
  <v-container fill-height d-flex>
    <v-layout align-center justify-left>
      <v-flex xs6 md5>
        <v-card height="400px" width="350px" class="ml-0">
          <v-card-text>
            <v-container>
              <v-form>
                 <h1 class="text-xs-center">Student Activities Record System</h1>
                <v-layout >
                  <v-flex xs12> <h1 class="body-2">Username:</h1>
                    <v-text-field name="username" v-model="input.username" type="text" single-line outline v-validate="'required|username'" required ></v-text-field>
                    <div>{{errors.first('username') }}</div>
                  </v-flex>
                </v-layout>
                <v-layout >
                  <v-flex xs12>
                    <h1 class="body-2">Password:</h1><v-text-field name="password"  id="password" v-model="input.password" type="password" single-line outline required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" color="#ffee00" class="#ffee00 darken-1 black--text mr-4 mx-3" v-on:click="login()">Log in</v-btn>
                     <v-btn small flat class="hover:before caption text-none ml-4" to="/forgotpassword">Forgot Password?</v-btn>
                  </v-flex>
                </v-layout>
              
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-img>
</div>
</template>

<script>
import Vue from "vue"
import VeeValidate from "vee-validate"
Vue.use(VeeValidate);
  export default {
    data () {
      return {
        input: {
                    username: "",
                    password: ""
                }
      }
    },
    methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.USERusername && this.input.password == this.$parent.mockAccount.USERpassword) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "DashboardSO" });
                     } else if
                       (this.input.username == this.$parent.mockAccount.ADMINusername && this.input.password == this.$parent.mockAccount.ADMINpassword) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "DashboardSOCC" });
                    }
                      else if
                        (this.input.username == this.$parent.mockAccount.SUusername && this.input.password == this.$parent.mockAccount.SUpassword) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "DashboardOSA" });
                    }
                     else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    }
   
  }
</script>
<style>
#background {
     /*background-image:"Archblack.JPG" ;*/ 
    /* background-color: #8f2c2c; */
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .v-btn:hover:before {
      background-color: transparent;
    }
</style>

// Main: #2b2b2b
// Buttons: #ffee00
// Accents: #ffcc00