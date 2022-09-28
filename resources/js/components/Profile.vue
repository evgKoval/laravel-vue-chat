<template>
    <div>
        <v-list-item class="px-3">
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
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["user"]),
    },
};
</script>
