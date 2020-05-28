import Vue from "vue";
import Router from "vue-router";
import { isValidAccessToken, checkIfIsAdmin } from "./store/api/auth";

function auth(to, from, next) {
    if (!isValidAccessToken()) {
        return next({ name: "login" });
    }
    return next();
}

function noAuth(to, from, next) {
    if (isValidAccessToken()) {
        return next({ name: "homePage" });
    }
    return next();
}

function isAdmin(to, from, next) {
    if (isValidAccessToken()) {
        if (checkIfIsAdmin()) {
            return next()
        }
    }
    return next({ name: "homePage" })
}

const HomePage = () => import("./views/HomePage");
const LoginPage = () => import("./views/LoginPage");
const RegisterNewUser = () => import("./views/RegisterNewUser");
const UserListPage = () => import("./views/UserListPage");

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/login",
            name: "login",
            component: LoginPage,
            beforeEnter: noAuth
        },
        {
            path: "/",
            name: "homePage",
            component: HomePage,
            beforeEnter: auth,
        },
        {
            path: "/register",
            name: "registerNewUser",
            component: RegisterNewUser,
            beforeEnter: isAdmin,
        },
        {
            path: "/user-list",
            name: "UserListPage",
            component: UserListPage,
            beforeEnter: isAdmin,
        }
    ]
})