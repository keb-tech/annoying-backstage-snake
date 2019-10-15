import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import LoginComponent from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'

import DashboardSO from './views/Dash_so.vue'
import DashboardSOCC from './views/Dash_socc.vue'
import DashboardOSA from './views/Dash_osa.vue'

import AccountsOSA from './views/OSA/accounts.vue'
import CertificateOSA from './views/OSA/certificate.vue'
import postER_OSA from './views/OSA/postER_osa.vue'
import report_OSA from './views/OSA/report_osa.vue'
import SPReport_OSA from './views/OSA/SPReport_osa.vue'
import SearchFile from './views/SOCC/searchfile.vue'

import PaperVali from './views/SOCC/papervali.vue'
import PostER_SOCC from './views/SOCC/postER_socc.vue'
import report_SOCC from './views/SOCC/report_socc.vue'
import SPReport_SOCC from './views/SOCC/SPReport_socc.vue'

import NewProject from './views/SO/newproject.vue'
import reportfeedback from './views/SO/reportfeedback.vue'
import saveddrafts from './views/SO/saveddrafts.vue'
import Project from './views/SO/Projects.vue'
import StudentPartiSO from './views/SO/studparti.vue'


import PasswordOSA from './views/OSA/Password_osa.vue'
import PasswordSOCC from './views/SOCC/Password_socc.vue'
import PasswordSO from './views/SO/Password_so.vue'

import certificateresult from './views/OSA/certificateresult.vue'

import usersList from './views/OSA/usersList.vue'

import Org from './views/SO/Org.vue'
import SOCC from './views/SOCC/SOCC.vue'
import Admin from './views/OSA/Admin.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
      name: "Dashboard" }
      
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/org",
      name: "org",
      component: Org ,
      beforeEnter(to, from,next) {
        if(store.state.currentUser.role_id == 1) {
          next();
        } else {
          next('/');
        }
      },
      children: [
        {
          path: "newproject",
          name: "NewProject",
          component: NewProject
        },
        {
          path: "Projects",
          name: "Projects",
          component: Project
        },
        {
          path: "reportfeedback",
          name: "reportfeedback",
          component: reportfeedback
        },
        {
          path: "saveddrafts",
          name: "saveddrafts",
          component: saveddrafts
        },
        {
          path: "studparti",
          name: "studparti",
          component: StudentPartiSO
        }
      ]
    },
    {
      path: "/socc",
      name: "socc",
      component: SOCC,
      beforeEnter(to, from,next) {
        if(store.state.currentUser.role_id == 2) {
          next();
        } else {
          next('/');
        }
      },
      children: [
        {
          path: "papervali",
          name: "PaperVali",
          component: PaperVali
        },
        {
          path: "postER_socc",
          name: "postER_socc",
          component: PostER_SOCC
        },
        {
          path: "report",
          name: "report_socc",
          component: report_SOCC
        },
        {
          path: "studentpartireport_socc",
          name: "SPReport_socc",
          component: SPReport_SOCC
        },
        {
          path: "searchfile",
          name: "SearchFile_SOCC",
          component: SearchFile
        }
      ]
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      beforeEnter(to, from,next) {
        if(store.state.currentUser.role_id == 3) {
          next();
        } else {
          next('/');
        }
      },
      children: [
        {
          path: "accounts",
          name: "AccountsOSA",
          component: AccountsOSA
        },
        {
          path: "certificate",
          name: "CertificateOSA",
          component: CertificateOSA
        },
        {
          path: "postER_osa",
          name: "postER_OSA",
          component: postER_OSA
        },
        {
          path: "report_osa",
          name: "report_OSA",
          component: report_OSA
        },
        {
          path: "certificateresult",
          name: "certificateresult",
          component: certificateresult
        },
        {
          path: "studentpartireport_osa",
          name: "SPReport_OSA",
          component: SPReport_OSA
        }
      ]
    },
    // {
    //   path: "/dashboard_so",
    //   name: "DashboardSO",
    //   component: DashboardSO
    // },
    
    // {
    //   path: "/dashboard_socc",
    //   name: "DashboardSOCC",
    //   component: DashboardSOCC
    // },

   
    // {
    //   path: "/dashboard_osa",
    //   name: "DashboardOSA",
    //   component: DashboardOSA
    // },
    {
      path: "/password_osa",
      name: "PasswordOSA",
      component: PasswordOSA
    },
    {
      path: "/password_so",
      name: "PasswordSO",
      component: PasswordSO
    },
    {
      path: "/password_socc",
      name: "PasswordSOCC",
      component: PasswordSOCC
    },
    {
      path: "/usersList",
      name: "usersList",
      component: usersList
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/dashboard') {
    if (!store.state.authToken) {
      next('/login');
    }
  }
  if (to.fullPath === '/login') {
    if (store.state.accessToken) {
      next('/dashboard');
    }
  }
  next();
});

export default router;