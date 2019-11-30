<template>
    <v-carousel 
        cycle
        interval="19500"
        :height="carouselHeight"
        hide-delimiters>
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
        ></v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    props: {
        carouselHeight: Number,
    },

    data: () => ({
        items: [
            {
                src: window.origin + '/carousel/about.gif',
            },
            {
                src: window.origin + '/carousel/hacker.gif',
            },
            {
                src: window.origin + '/carousel/tag-line.gif',
            },
        ]
    }),
}
</script>