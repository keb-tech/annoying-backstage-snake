<template>
  <div>
    <v-app>
      <v-card class height="100px" color="black" flat>
      <v-card class="mt-0 mb-3" height="94px" color="#FFEE58" flat></v-card>
      </v-card>
      <v-container fluid fill-height>
        <v-layout column align-center justify-center class="mr-4">
          <v-flex md7>
            <v-card height="400px" flat width="500px" color="#FAFAFA" class="ml-0">
              <v-card-text>
                <v-container>
                  <v-form ref="form" lazy-validation v-model="valid">
                    <h1 class="text-xs-center">Student Activities Records System</h1>
                    <v-layout>
                      <v-flex xs12>
                        <h1 class="body-2">Username:</h1>
                        <v-text-field
                          name="email"
                          v-model="loginInfo.email"
                          type="text"
                          single-line
                          outline
                          :rules="usernameRules"
                          required
                        ></v-text-field>
                      <!--  <div>{{errors.first('username') }}</div>-->
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex xs12>
                        <h1 class="body-2">Password:</h1>
                        <v-text-field
                          name="password"
                          id="password"
                          v-model="loginInfo.password"
                          type="password"
                          single-line
                          outline
                          :rules="passwordRules"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout column align-center justify-center>
                      <v-flex xs4>
                        <v-btn type="submit"
                        class="yellow lighten-1 black--text mr-4 title"
                        large
                        @click.prevent= "loginUser"
                        >Login</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-form>
                </v-container>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

      </v-container>
      <v-card class height="80px" color="black" flat>
        <v-card class="mt-1" height="70px" color="#FFEE58" flat>
          <v-layout row justify-center>
            <v-card-title class="mr-4 text-center">Copyright @2019</v-card-title>
          </v-layout>
        </v-card>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import Vue from "vue"
import axios from 'axios'
import store from '@/store.js'
import Api from '@/_services/Api.js';

export default {
  data() {
    return {
      loginInfo: {
        email: '',
        password: ''
      },
      usernameRules: [v => !!v || "Username is required"],
      passwordRules: [v => !!v || "Password is required"] ,
      valid: true
    }
  },
  methods: { //Login.vue
    // async loginUser() {
    //   let user = await this.$store.dispatch('loginUser', 
    //   {email: this.loginInfo.email, password: this.loginInfo.password});
      
    //   if(user.error){
    //     alert(user.error)
    //   } else {
    //     alert('You are now logged in, ' + user.first_name + ".");
    //   }
    // },

    // async loginUser(){
    //  let response = await Api().post('/login',
    //  {email: this.loginInfo.email, password: this.loginInfo.password});
    //  console.log(response)
    //  console.log(this.loginInfo)
    // },

    // validate() {
    //   if (this.$refs.form.validate()) {
    //     this.snackbar = true
    //   }
     },
  };
  // watch: {
  //   user(value) {
  //     if (value !== null && value !== undefined) {
  //       this.$router.push("/");
  //     }
  //   }
  // }
// };
</script>
<style>
</style>