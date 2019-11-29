<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col lg="8" sm="12">
                    <v-row>
                        <div class="photogametry justify-end">
                            <iframe 
                                title="A 3D model" 
                                height="480" 
                                width="640"
                                src="https://sketchfab.com/models/c7aab06a022b4838b5d56eb4793fa572/embed?autostart=1&amp;camera=0" 
                                frameborder="0" 
                                allow="autoplay;" 
                                mozallowfullscreen="false" 
                                webkitallowfullscreen="false"></iframe>
                        </div>
                    </v-row>
                    <v-row>
                        <v-col class="pa-12">
                            <h2>Rating</h2>
                            <v-range-slider
                                :tick-labels="['1', '2' ,'3' ,'4', '5']"
                                :value="[0, 1]"
                                min="0"
                                max="4"
                                ticks="always"
                                tick-size="5"
                            >
                                <template v-slot:thumb-label="props">
                                <v-icon dark>
                                    mdi-account
                                </v-icon>
                                </template>
                            </v-range-slider>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col lg="4" sm="12">
                    <v-card class="mb-5">
                        <v-card-title>House 1</v-card-title>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cumque beatae aut magnam harum illum est quos tempora repellat consectetur. Aspernatur a corporis repellat alias facilis assumenda provident quia! Id.
                        </v-card-text>  
                    </v-card>
                    <v-card>
                        <v-list-item v-for="(comment, index) in comments" :key="index">
                            <v-list-item-content>
                                <v-row>
                                    <v-col cols="2">
                                        <v-avatar>
                                            <v-img :src="comment.avatar"></v-img>
                                        </v-avatar>
                                    </v-col>
                                    <v-col cols="10">
                                        <div class="font-weight-bold">{{ comment.name }}</div>
                                        <div>{{ comment.text }}</div>
                                    </v-col>
                                </v-row>
                            </v-list-item-content>
                        </v-list-item>
                        <div class="mx-2">
                            <v-text-field 
                            v-model="inputComment"
                            placeholder="Write a comment..."
                            @keyup.enter="addComment"
                            filled></v-text-field>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        
    </v-content>
</template>

<script>
export default {
    data: () => ({
        inputComment: '',
        comments: [
            {
                name: 'Erica',
                avatar: 'https://i.pravatar.cc/300?img=1',
                text: 'Lorem ipsum dolor',
            },
            {
                name: 'Jaina',
                avatar: 'https://i.pravatar.cc/300?img=2',
                text: 'Dillum astranar ashenvale orgrimmar',
            },
        ],
    }),

    methods: {
        addComment() {
            this.comments.push({
                name: 'Drake',
                avatar: 'https://i.pravatar.cc/300?img=3',
                text: this.inputComment,
            })
        },
    },
}
</script>

<style>
.photogametry {
    display: flex;
    justify-content: center;
}
</style>