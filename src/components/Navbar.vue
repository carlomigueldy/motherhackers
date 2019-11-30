<template>
    <div>
        <div>
            <v-app-bar
                app
                dark
                class="light-green darken-1 my-mx-15 elevation-0"
            >
                <span @click="$router.push({ name: 'home' })">
                    <img src="../assets/icon.png" height="100" alt="">
                </span>
                <span @click="$router.push({ name: 'home' })">
                    <v-toolbar-title>Cleaner Marawi</v-toolbar-title>
                </span>

                <v-spacer></v-spacer>

                <span v-if="$router.currentRoute.name === 'photogrammetry'">
                    <v-btn @click="$router.push({ name: 'home' })" text>Earn a Badge </v-btn>
                </span>
                <span v-else>
                    <v-btn href="#map" text>Earn a Badge </v-btn>
                </span>
            </v-app-bar>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        // console.log(this.$router)
    }
}
</script>

<style>
.my-mx-15 {
    margin-left: 6rem;
    margin-right: 6rem;
}
</style>