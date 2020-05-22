import Vue from "vue";
import Router from "vue-router";
import { isValidAccessToken } from "./store/api/auth";

function auth(to, from, next) {
    if (!isValidAccessToken()) {
        return next({ name: "login" });
    }
    return next();
}

function noAuth(to, from, next) {
    if (isValidAccessToken()) {
        return next({ name: "abc" });
    }
    return next();
}

const App = () => import("./App");
const HomePage = () => import("./views/HomePage");
const LoginPage = () => import("./views/LoginPage");

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/abc",
            name: 'abc',
            component: App,
            beforeEnter: noAuth
        },
        {
            path: "/login",
            name: "login",
            component: LoginPage,
            beforeEnter: noAuth
        },
        {
            path: "/home",
            name: "homePage",
            component: HomePage,
            beforeEnter: auth
        }
    ]
})