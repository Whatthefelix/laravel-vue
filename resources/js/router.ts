// import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'

App.use(VueRouter)

import LoginForm from '../js/components/LoginForm.vue'

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'Login',
            component: LoginForm
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginForm
        }
    ]
})
