<template>
    <v-navigation-drawer v-model="drawer" absolute fixed clipped>

        <v-toolbar dark color="primary">
            <v-btn icon dark @click="drawer=false">
                <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Bookstore</v-toolbar-title>
        </v-toolbar>

        <v-list>
            <v-list-item>
                <v-btn depressed block rounded color="secondary" class="white--text">
                    Register <v-icon right dark>person_add</v-icon>
                </v-btn>
            </v-list-item>
            <v-list-item>
                <v-btn @click="login()" block rounded depressed color="accent lighten-1" class="white--text">
                    Login <v-icon right dark>lock_open</v-icon>
                </v-btn>
            </v-list-item>
        </v-list>

        <v-list class="pt-0" dense>

            <v-divider></v-divider>

            <v-list-item v-for="(item, index) in items" :key="index" :href="item.route" :to="{name: item.route}">
                <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

        </v-list>

    </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'c-side-bar',
    data: () => ({
        items: [
            { title: 'Home', icon: 'dashboard', route: 'home' },
            { title: 'About', icon: 'question_answer', route: 'about' },
        ]
    }),
    computed: {
        ...mapGetters({
            sideBar : 'sideBar',
            user : 'auth/user',
            guest : 'auth/guest',
        }),
        drawer: {
            get () {
                return this.sideBar
            },
            set (value) {
                this.setSideBar(value)
            }
        },
    },
    methods: {
        ...mapActions({
            setSideBar : 'setSideBar',
            setStatusDialog : 'dialog/setStatus',
            setComponent : 'dialog/setComponent',
            setAuth : 'auth/set',
            setAlert : 'alert/set',
        }),
        login(){
            this.setStatusDialog(true)
            this.setComponent('login')
            this.setSideBar(false)
        },
    },
}
</script>