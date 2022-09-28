<template>
    <div>
        <v-list-item class="px-3" link @click="openProfilePopup">
            <v-list-item-avatar>
                <v-img
                    src="https://randomuser.me/api/portraits/women/85.jpg"
                ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    {{ user.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{ user.email }}
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-dialog v-model="isPopupShown" max-width="374">
            <v-card>
                <div class="avatar-wrapper">
                    <v-avatar size="70">
                        <v-img
                            src="https://randomuser.me/api/portraits/women/85.jpg"
                        ></v-img>
                    </v-avatar>
                </div>

                <v-card-title>Edit Profile</v-card-title>

                <v-card-text>
                    <v-form v-model="isFormValid">
                        <v-text-field
                            v-model="form.name"
                            :rules="nameRules"
                            label="Name"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="form.email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                        ></v-text-field>
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="red darken-1" text @click="logout">
                        Logout
                    </v-btn>
                    <v-btn
                        color="primary"
                        :disabled="!isFormValid"
                        text
                        @click="editUserData"
                    >
                        Edit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            isPopupShown: false,
            isLogoutButtonLoading: false,
            isFormValid: false,
            form: {
                name: "",
                email: "",
            },
            nameRules: [(v) => !!v || "Name is required"],
            emailRules: [
                (v) => !!v || "E-mail is required",
                (v) => /.+@.+/.test(v) || "E-mail must be valid",
            ],
        };
    },
    computed: {
        ...mapGetters(["user"]),
    },
    methods: {
        ...mapActions(["logout"]),
        openProfilePopup() {
            this.isPopupShown = true;
            Object.assign(this.form, this.user);
        },
        editUserData() {
            //
        },
    },
};
</script>

<style scoped>
.avatar-wrapper {
    display: flex;
    justify-content: center;
    padding-top: 24px;
}
</style>
