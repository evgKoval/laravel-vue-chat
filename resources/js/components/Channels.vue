<template>
    <v-list class="channels">
        <v-list-item>
            <v-btn block elevation="2">
                <v-icon left> mdi-account-group </v-icon>
                New channel
            </v-btn>
        </v-list-item>

        <v-list-item-group v-model="selected" active-class="blue--text">
            <v-list-item v-for="channel in channels" :key="channel.title" link>
                <v-list-item-avatar>
                    <v-img v-if="channel.image" :src="channel.image"></v-img>
                    <v-avatar v-else class="white--text" color="teal" size="56">
                        {{ getAcronym(channel.name) }}
                    </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        {{ channel.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle
                        class="text-caption"
                        v-if="channel.last_message"
                    >
                        {{ channel.last_message.author }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-if="channel.last_message">
                        {{ channel.last_message.text }}
                    </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                    <v-list-item-action-text v-if="channel.last_message">
                        {{ channel.last_message.time }}
                    </v-list-item-action-text>

                    <v-chip
                        color="primary"
                        small
                        v-show="channel.count_unread_messages"
                    >
                        {{ channel.count_unread_messages }}
                    </v-chip>
                </v-list-item-action>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
export default {
    data() {
        return {
            selected: null,
            channels: [],
        };
    },
    async mounted() {
        const response = await axios.get("/api/channels");
        this.channels = response.data.data;
    },
    methods: {
        getAcronym(string) {
            return string
                .match(/\b(\w)/g)
                .slice(0, 2)
                .join("");
        },
    },
};
</script>

<style scoped>
.channels {
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
