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