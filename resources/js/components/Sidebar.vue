<template>
    <v-list class="sidebar">
        <div>
            <v-list-item class="px-3">
                <v-list-item-avatar>
                    <v-img
                        src="https://randomuser.me/api/portraits/women/85.jpg"
                    ></v-img>
                </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Sandra Adams
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        sandra_a88@gmail.com
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </div>

        <v-divider></v-divider>

        <channels />
    </v-list>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-bottom: 0;
}
</style>
