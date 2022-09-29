import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/plugins/router';
import AuthService from "@/services/AuthService";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null,
        isAppLoading: true,
        isSnackbarShown: false,
        errorMessage: "",
    },
    mutations: {
        SET_USER(state, user) {
            if (!user) {
                state.user = null;
                return;
            }

            state.user = Object.assign({}, user);
        },
        SET_APP_LOADING(state, loading) {
            state.isAppLoading = loading;
        },
        SET_SNACKBAR_SHOWN(state, snackbarShown) {
            state.isSnackbarShown = snackbarShown;
        },
        SET_ERROR_MESSAGE(state, message) {
            state.errorMessage = message;
        },
    },
    actions: {
        async getUser({ commit }) {
            try {
                const response = await AuthService.getUser();
                commit("SET_USER", response.data.data);
                return response.data.data;
            } catch (error) {
                commit("SET_ERROR_MESSAGE", error.data.message);
                commit("SET_SNACKBAR_SHOWN", true);
            }
        },
        async logout({ commit }) {
            try {
                commit("SET_APP_LOADING", true);
                await AuthService.logout();
                commit("SET_USER", null);

                if (router.currentRoute.name !== "login") {
                    router.push({ path: "/login" });
                }
            } catch (error) {
                commit("SET_ERROR_MESSAGE", error.data.message);
                commit("SET_SNACKBAR_SHOWN", true);
            } finally {
                commit("SET_APP_LOADING", false);
            }
        },
        async editUser({ commit }, payload) {
            try {
                await AuthService.updateUser(payload);
                commit("SET_USER", payload);
            } catch (error) {
                commit("SET_ERROR_MESSAGE", error.data.message);
                commit("SET_SNACKBAR_SHOWN", true);
            }
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        isAppLoading(state) {
            return state.isAppLoading;
        },
        isSnackbarShown(state) {
            return state.isSnackbarShown;
        },
        errorMessage(state) {
            return state.errorMessage;
        },
    }
});

export default store;
