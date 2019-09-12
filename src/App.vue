<template>
      <router-view @authenticated="setAuthenticated" />
</template>

<script>
    export default {
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    USERusername: "user",
                    USERpassword: "user",
                    ADMINusername: "admin",
                    ADMINpassword: "admin",
                    SUusername: "superuser",
                    SUpassword: "superuser"
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