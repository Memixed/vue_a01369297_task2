<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import firebase from "firebase/compat/app";
//import {FieldValue} from "@firebase/firestore-types";

export default {
  name: 'App',
  async mounted() {
    login();

  },
  data: () => ({
    //
  }),
  methods: {
    async login() {
      await firebase.auth().signInWithEmailAndPassword('dummy3@test.com','dummy3');
    },
  },
};
</script>
