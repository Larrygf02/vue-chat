<template>
    <v-container>
        <h1>Chat</h1>
        <v-card class="mx-auto" max-width="344" outlined>
            <v-list :disabled="true">
                <v-list-item-group v-model="item" color="primary">
                    <v-list-item v-for="(message, i) in messages" :key="i">
                        <v-list-item-content>
                            <v-list-item-title v-html="message.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <v-divider></v-divider>
            <v-card-actions class="text-center">
                <v-form ref="form">
                    <v-text-field
                        outlined
                        v-model="message"
                        label="Escribir su mensaje aquí"></v-text-field>
                    <v-btn @click.prevent="sendMessage" text>Enviar mensaje</v-btn>
                </v-form>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script>
import io from 'socket.io-client'
// URL ngrok
const socket = io('http://localhost:3000/')
export default {
    data() {
        return {
            item: 5,
            message: '',
            messages: []
        }
    },
    created() {
        socket.on("chat message", msg => {
            this.messages.push({ title: msg })
        })
    },
    methods: {
        sendMessage() {
            socket.emit('chat message', this.message)
            this.message = ''
        }
    }
}
</script>