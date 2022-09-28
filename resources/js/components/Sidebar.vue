<template>
    <v-list class="sidebar">
        <profile />
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
