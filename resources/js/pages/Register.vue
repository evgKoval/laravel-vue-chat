<template>
    <v-form v-model="isFormValid" @submit.stop.prevent="register" method="post">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h1 class="mb-3">Register</h1>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                        v-model="form.name"
                        :rules="nameRules"
                        label="Name"
                        required
                    ></v-text-field>
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
                    <v-text-field
                        type="password"
                        v-model="form.password_confirmation"
                        :rules="passwordRules"
                        label="Confirm Password"
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
                        Register
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import { mapMutations } from "vuex";
import AuthService from "@/services/AuthService";

export default {
    data() {
        return {
            isFormValid: false,
            isSubmitButtonLoading: false,
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            },
            nameRules: [(v) => !!v || "Name is required"],
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
            setErrorMessage: "SET_ERROR_MESSAGE",
        }),
        async register() {
            this.isSubmitButtonLoading = true;

            try {
                await AuthService.registerUser(this.form);
                this.$router.push("/");
            } catch (error) {
                this.setErrorMessage(error.data.message);
                this.setSnackbarShown(true);
            } finally {
                this.isSubmitButtonLoading = false;
            }
        },
    },
};
</script>
