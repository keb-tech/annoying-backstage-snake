import Vue from 'vue';
import Vuex from 'vuex';
import Api from './_services/Api.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    currentUser: {},
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    LOGOUT_USER(state) {
      state.currentUser = {}
      window.localStorage.currentUser = JSON.stringify({});
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
      window.localStorage.currentUser = JSON.stringify(user);
    }
  },
  actions: {
    async loadUsers({commit}) {
      let response = await Api().get('/users');
      let users = response.data.data;
      commit('SET_USERS', users.map(u => u.attributes));

      let user = JSON.parse(window.localStorage.currentUser);
      commit('SET_CURRENT_USER', user);
    },
    logoutUser({commit}) {
      commit('LOGOUT_USER')
    },
    async loginUser({commit}, loginInfo) { //store.js
      console.log(loginInfo)
  
      try {

      let response = await Api().post('/login', loginInfo);
      console.log(response)

      // let user = response.data.data.attributes;
      let user = Api().get('/user');
      console.log(user)
      
      commit('SET_CURRENT_USER', user);
      return user;

    } catch {

      return {error: "Username / Password combination was incorrect or unrecognized by the system. Please try again."}
    
    }
    

     
    }
  }
})
