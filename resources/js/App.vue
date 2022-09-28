<template>
    <v-app>
        <div v-if="isAppLoading" class="progress-wrapper">
            <v-progress-circular
                :size="50"
                color="amber"
                indeterminate
            ></v-progress-circular>
        </div>
        <template v-else>
            <v-navigation-drawer app>
                <sidebar v-if="user" />
                <auth-buttons v-else />
            </v-navigation-drawer>

            <v-app-bar app>
                <v-toolbar-title>LaravelVueChat</v-toolbar-title>
            </v-app-bar>

            <v-main>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-main>
        </template>

        <v-snackbar v-model="isSnackbarShown" :timeout="-1" right color="red">
            {{ errorMessage }}
            <template v-slot:action="{ attrs }">
                <v-btn text v-bind="attrs" @click="closeSnackbar">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters([
            "user",
            "isAppLoading",
            "isSnackbarShown",
            "errorMessage",
        ]),
    },
    methods: {
        ...mapMutations({
            setSnackbarShown: "SET_SNACKBAR_SHOWN",
        }),
        closeSnackbar() {
            this.setSnackbarShown(false);
        },
    },
};
</script>

<style scoped>
.progress-wrapper {
    align-self: center;
    display: contents;
}
.progress-wrapper .v-progress-circular {
    margin: auto;
}
</style>
