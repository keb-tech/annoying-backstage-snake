import Vue from 'vue';
import Vuex from 'vuex';
import PersistedState from 'vuex-persistedstate';
import Api from './_services/Api.js';
import router from './router';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    // users: [],
    authStatus: '',
    authToken: window.localStorage.getItem('token') || '',
    currentUser: {},
  },
  plugins: [
    PersistedState({
      key: 'storeUser',
      paths: ['currentUser']
    }),
    PersistedState({
      key: 'storeAuth',
      paths: ['authStatus', 'authToken']
    }),
  ],
  getters: {
    isLoggedIn: state => !!state.authToken,
    authProgress: state => state.authStatus
  },

  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    // SET_CURRENT_USER(state, user) {
    //   state.currentUser = user;
    //   window.localStorage.currentUser = JSON.stringify(user);
    // },
    AUTHORIZATION_REQUEST(state) {
      state.authStatus = 'authenticating'
    },
    AUTHORIZATION_SUCCESS(state, { token, user }) {
      state.authStatus = 'success'
      state.authToken = token;
      state.currentUser = user;
      window.localStorage.currentUser = JSON.stringify(user);
    },
    AUTHORIZATION_ERROR(state) {
      state.authStatus = 'error'
    },
    LOGOUT_USER(state) {
      state.authStatus = ''
      state.authToken = ''
      state.currentUser = {}
    },
  },
  actions: {
    // async loadUsers({commit}) {
    //   let response = await Api().get('/users');
    //   let users = response.data.users;
    //   commit('SET_USERS', users.map(u => u.attributes));

    //   let user = JSON.parse(window.localStorage.currentUser);
    //   commit('SET_CURRENT_USER', user);
    // },

    logoutUser({commit}) {
      return new Promise((resolve, reject) => {
        commit('LOGOUT_USER')
        window.localStorage.removeItem('currentUser')
        window.localStorage.removeItem('authToken')
        window.localStorage.removeItem('storeAuth')
        window.localStorage.removeItem('storeUser')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      }),
      router.push('/login');
    },
    async loginUser({commit}, loginInfo) { //store.js
      commit('AUTHORIZATION_REQUEST')
      
        try {

          let response = await Api().post('/login', loginInfo);
          console.log(response)

          const token = response.data.token;
          console.log(token)

          const user = response.data.user;
          console.log(user)

          window.localStorage.setItem('authToken', token);
          // axios.defaults.headers.common['Authorization'] = token;

          commit('AUTHORIZATION_SUCCESS', { token, user });
        
          // commit('SET_CURRENT_USER', user);
          // console.log(JSON.parse(window.localStorage.currentUser));
        
          router.push('/dashboard');

        return user;
        


    } catch  {
      
      commit('AUTHORIZATION_ERROR')
      window.localStorage.removeItem('token')

      return {error: "Email / Password combination was incorrect or unrecognized by the system. Please try again."}
    
    }
    
     
    }
  }
})
