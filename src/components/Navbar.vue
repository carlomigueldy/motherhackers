<template>
    <div>
        <v-app-bar
            app
            dark
            class="light-green darken-1 my-mx-15 elevation-0"
        >
            <span>
                <img src="../assets/icon.png" height="100" alt="">
            </span>
            <span>
                <v-toolbar-title>Cleaner Marawi</v-toolbar-title>
            </span>

            <v-spacer></v-spacer>

            <v-btn href="#map" text>Earn a Badge </v-btn>
        </v-app-bar>
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