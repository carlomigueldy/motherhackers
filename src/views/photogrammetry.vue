<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col lg="8" sm="12">
                    <v-row>
                        <v-col>
                            <div class="photogametry">
                                <iframe 
                                    title="A 3D model" 
                                    height="300" 
                                    width="750"
                                    src="https://sketchfab.com/models/c7aab06a022b4838b5d56eb4793fa572/embed?autostart=1&amp;camera=0" 
                                    frameborder="0" 
                                    allow="autoplay;" 
                                    mozallowfullscreen="false" 
                                    webkitallowfullscreen="false"></iframe>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            Images here
                        </v-col>
                    </v-row>
                </v-col>
                <v-col lg="4" sm="12">
                    <v-card class="mb-2">
                        <v-card-title>Site Number One</v-card-title>
                        <v-card-text>
                            <div class="mb-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi in assumenda aliquam ab facere saepe suscipit, expedita accusamus? Dolorem iure laborum doloremque optio animi!
                            </div>
                            <div class="black--text">
                                <span>Rating: 8.3 / 10</span> <span><img height="100" src="../assets/leaf4.png" alt=""></span>
                            </div>
                        </v-card-text>  
                        <v-card-actions class="justify-center">
                            <v-btn 
                                depressed
                                @click="rateDialog = !rateDialog"
                                color="yellow darken-2">
                                Rate
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-card>
                        <v-list-item 
                            v-for="(comment, index) in comments" 
                            :key="index">
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
                                        <small>{{ comment.created_at }}</small>
                                    </v-col>
                                </v-row>
                            </v-list-item-content>
                        </v-list-item>
                        
                        <div>
                            <v-text-field 
                            class="m-0 p-0"
                            append-icon="mdi-send"
                            v-model="inputComment"
                            placeholder="Write a comment..."
                            @keyup.enter="addComment"
                            hide-details
                            filled></v-text-field>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        
        <v-dialog
            v-model="rateDialog"
            width="500"
            >
            <v-card>
                <v-card-title
                primary-title
                >
                </v-card-title>

                <v-card-text>
                    <div class="text-center">
                        <v-rating
                        v-model="rating"
                        color="yellow darken-2"
                        size="32"
                        ></v-rating>
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="rateSubmit()"
                        >
                        Submit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        
        <v-dialog
            v-model="rateSubmitDialogMsg"
            width="500"
            >
            <v-card>
                <v-card-title
                primary-title
                >
                </v-card-title>

                <v-card-text>
                    <div class="text-center">
                        <div class="headline">Thank you for rating!</div>
                    </div>
                </v-card-text>


                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="rateSubmitDialogMsg = !rateSubmitDialogMsg"
                    >
                    Close
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-content>
</template>

<script>
export default {
    data: () => ({
        rateSubmitDialogMsg: false,
        rateDialog: false,
        rating: '',
        inputComment: '',
        comments: [
            {
                name: 'Sylvannas Windrunner',
                avatar: 'https://i.pravatar.cc/300?img=1',
                text: 'This is actually a good platform for the rejuvenation of Marawi',
                created_at: '18 hours ago'
            },
            {
                name: 'Jaina Proudmoore',
                avatar: 'https://i.pravatar.cc/300?img=5',
                text: 'Dillum astranar ashenvale orgrimmar',
                created_at: '8 hours ago'
            },
        ],
    }),

    methods: {
        addComment() {
            this.comments.push({
                name: 'Drake',
                avatar: 'https://i.pravatar.cc/300?img=3',
                text: this.inputComment,
                created_at: '3 seconds ago'
            })

            this.inputComment = ''
        },

        rateSubmit() {
            this.rateDialog = !this.rateDialog
            this.rateSubmitDialogMsg = !this.rateSubmitDialogMsg 
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