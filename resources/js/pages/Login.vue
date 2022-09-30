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
                    <v-btn
                        block
                        :disabled="!isFormValid"
                        :loading="isSubmitButtonLoading"
                        color="primary"
                        type="submit"
                    >
                        Login
                    </v-btn>
                    <v-btn
                        class="mt-3"
                        color="primary"
                        text
                        small
                        to="/forgot-password"
                    >
                        Forgotten password?
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import AuthService from "@/services/AuthService";
import { email, password } from "@/utils/validationRules";

export default {
    data() {
        return {
            isFormValid: false,
            isSubmitButtonLoading: false,
            form: {
                email: "",
                password: "",
            },
            validationRules: {
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
