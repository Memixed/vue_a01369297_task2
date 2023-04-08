<template>
  <v-app>
    <v-app-bar
      app
      color="#384FFE"
      dark
    >
      <v-col cols="3"  md="4">
        <v-img
            alt="Tec Logo"
            src="./.\assets\logoTec.png"
            transition="scale-transition"
            height="70"
            width="180"
        />
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="10" md="3">
        <v-row class="flex-row-reverse">
          <router-link to="/">
            <h4 style="color: #ffffff" class="ma-2">Log In</h4>
          </router-link>
          <router-link to="/NewUsr">
            <h4 style="color: #FFFFFF" class="ma-2">Sign In</h4>
          </router-link>
        </v-row>
        <v-row class="flex-row-reverse">
          <router-link to="/Materias">
            <h4 style="color: #ffffff" class="ma-2">LISTADO DE MATERIAS</h4>
          </router-link>
          <router-link to="/Alumno">
            <h4 style="color: #FFFFFF" class="ma-2">INICIO</h4>
          </router-link>
        </v-row>
      </v-col>
    </v-app-bar>

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
