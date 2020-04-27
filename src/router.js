import Vue from "vue";
import Router from "vue-router";
import { isValidAccessToken } from "./api/auth";

function auth(to, from, next) {
    if (isValidAccessToken() === true) {
        return next({ name: "homePage" });
    } else {
        return next({ name: "login" });
    }
}

const App = () => import("./App");
const HomePage = () => import("./views/HomePage");
const Login = () => import("./views/LoginPage");

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/abc",
            component: App,
            beforeEnter: auth
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/home",
            name: "homePage",
            component: HomePage
        }
    ]
})