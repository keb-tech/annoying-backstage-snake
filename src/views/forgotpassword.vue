<template>
 <v-app id="inspire">
<v-container fluid fill-height>
        <v-layout row align-center justify-center >
          <v-flex xs12 sm8 md5>
            <v-card class="elevation-12">
              <v-toolbar dark color="orange">
                <v-toolbar-title>Forgot Password?</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                  Enter your E-mail address to request to reset your password.
                <v-form>
                  <v-flex sm12>
                    <v-text-field prepend-icon="mail_outline"
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"> E-mail
                    </v-text-field>
                  </v-flex>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green white--text">Send</v-btn> <v-btn class="ml-2" color="red white--text" @click="submit" to="/login">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      </v-app>
</template>
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

<script>
  export default {
    data: () => ({
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      lazy: false,
    })
  }
</script>