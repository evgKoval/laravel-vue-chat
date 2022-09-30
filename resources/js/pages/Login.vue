<template>
    <v-form v-model="isFormValid" @submit.stop.prevent="login" method="post">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h1 class="mb-3">Login</h1>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                        v-model="form.email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                        type="password"
                        v-model="form.password"
                        :rules="passwordRules"
                        label="Password"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-btn
                        block
                        :disabled="!isFormValid"
                        :loading="isSubmitButtonLoading"
                        color="primary"
                        type="submit"
                    >
                        Login
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import AuthService from "@/services/AuthService";

export default {
    data() {
        return {
            isFormValid: false,
            isSubmitButtonLoading: false,
            form: {
                email: "",
                password: "",
            },
            emailRules: [
                (v) => !!v || "E-mail is required",
                (v) => /.+@.+/.test(v) || "E-mail must be valid",
            ],
            passwordRules: [
                (v) => !!v || "Password is required",
                (v) =>
                    v.length >= 8 ||
                    "Password must be equal or more than 8 characters",
            ],
        };
    },
    methods: {
        ...mapMutations({
            setSnackbarShown: "SET_SNACKBAR_SHOWN",
            setNotification: "SET_NOTIFICATION",
        }),
        ...mapActions(["getUser"]),
        async login() {
            this.isSubmitButtonLoading = true;

            try {
                await AuthService.login(this.form);
                const user = await this.getUser();

                if (user) {
                    this.$router.push("/");
                }
            } catch (error) {
                this.setNotification({
                    type: "error",
                    message: error.data.message,
                });
                this.setSnackbarShown(true);
            } finally {
                this.isSubmitButtonLoading = false;
            }
        },
    },
};
</script>
