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
                        :rules="validationRules.name"
                        label="Name"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                        v-model="form.email"
                        :rules="validationRules.email"
                        label="E-mail"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                        type="password"
                        v-model="form.password"
                        :rules="validationRules.password"
                        label="Password"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                        type="password"
                        v-model="form.password_confirmation"
                        :rules="validationRules.password"
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
import { name, email, password } from "@/utils/validationRules";

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
            validationRules: {
                name,
                email,
                password,
            },
        };
    },
    methods: {
        ...mapMutations({
            setSnackbarShown: "SET_SNACKBAR_SHOWN",
            setNotification: "SET_NOTIFICATION",
        }),
        async register() {
            this.isSubmitButtonLoading = true;

            try {
                await AuthService.registerUser(this.form);
                this.$router.push("/");
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
