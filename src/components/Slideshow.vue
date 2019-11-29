<template>
    <v-carousel hide-delimiters>
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
        >
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                src: window.origin + '/pictures/pic1.jpg',
            },
            {
                src: window.origin + '/pictures/pic2.jpg',
            },
            {
                src: window.origin + '/pictures/pic3.jpg',
            },
            {
                src: window.origin + '/pictures/pic4.jpg',
            },
            {
                src: window.origin + '/pictures/pic5.jpg',
            },
        ]
    }),
}
</script>