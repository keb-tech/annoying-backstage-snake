<template>
<div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
  <v-app>
    <v-content>
      <router-view @authenticated="setAuthenticated" />
    </v-content> 
  </v-app>
</div>
</template>

<script>


export default {
  name: 'App',

  data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "user",
                    password: "userAk0"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>
