<template>
    <v-container>
        <h1>Chat</h1>
        <v-card class="mx-auto" max-width="344" outlined>
            <v-list :dense="dense" :disabled="true">
                <v-list-item-group v-model="item" color="primary">
                    <v-list-item v-for="(item, i) in items" :key="i">
                        <v-list-item-content>
                            <v-list-item-title v-html="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <v-divider></v-divider>
            <v-card-actions class="text-center">
                <v-form ref="form">
                    <v-text-field
                        outlined
                        v-model="text"
                        label="Escribir su mensaje aquí"></v-text-field>
                    <v-btn text>Enviar mensaje</v-btn>
                </v-form>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            item: 5,
            items: [
                {
                    title: 'Hola'
                }
            ]
        }
    }
}
</script>