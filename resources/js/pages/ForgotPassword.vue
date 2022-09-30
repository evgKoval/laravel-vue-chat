<template>
    <v-form
        v-model="isFormValid"
        @submit.stop.prevent="resetPassword"
        method="post"
    >
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h1 class="mb-3">Forgot Password</h1>
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
                    <v-btn
                        block
                        :disabled="!isFormValid"
                        :loading="isSubmitButtonLoading"
                        color="primary"
                        type="submit"
                    >
                        Reset Password
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import { mapMutations } from "vuex";
import AuthService from "@/services/AuthService";
import { email } from "@/utils/validationRules";

export default {
    data() {
        return {
            isFormValid: false,
            isSubmitButtonLoading: false,
            form: {
                email: "",
            },
            validationRules: {
                email,
            },
        };
    },
    methods: {
        ...mapMutations({
            setSnackbarShown: "SET_SNACKBAR_SHOWN",
            setNotification: "SET_NOTIFICATION",
        }),
        async resetPassword() {
            this.isSubmitButtonLoading = true;

            try {
                await AuthService.forgotPassword(this.form);

                this.setNotification({
                    type: "success",
                    message: "We have emailed your password reset link!",
                });
                this.setSnackbarShown(true);

                this.$router.push("/login");
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
