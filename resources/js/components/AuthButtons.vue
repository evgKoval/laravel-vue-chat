<template>
    <v-list>
        <v-list-item>
            <v-list-item-content>
                <v-btn block text outlined to="/login">
                    <v-icon small left> mdi-login-variant </v-icon>
                    Login
                </v-btn>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content>
                <v-btn block text outlined to="/register">
                    <v-icon small left> mdi-account-multiple-plus </v-icon>
                    Register
                </v-btn>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>