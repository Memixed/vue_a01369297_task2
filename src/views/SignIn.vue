<template>
  <v-container>
    <NavBarAuth></NavBarAuth>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3" style="color: #384ffe">
          Crea Una Cuenta
        </h1>
        <v-card class="mx-auto px-6 py-8" max-width="344">
          <v-form
              v-model="form"
              @submit.prevent="onSubmit"
          >
            <v-text-field
                v-model="nombre"
                label="Nombre Completo"
                :rules="[required]"
                outlined
            ></v-text-field>
            <v-text-field
                v-model="mat"
                label="Matricula"
                :rules="[required,valmat]"
                outlined
            ></v-text-field>
            <v-text-field
                v-model="corrt"
                label="Correo institucional"
                type="email"
                :rules="[required,validcorrtec]"
                outlined
            ></v-text-field>
            <v-text-field
                v-model="corr"
                label="Correo de respaldo"
                type="email"
                :rules="[required,validcorr]"
                outlined
            ></v-text-field>
            <v-text-field
                v-model="con1"
                label="Contraseña"
                type="password"
                :rules="[required,minlen]"
                outlined
            ></v-text-field>
            <v-text-field
                v-model="con2"
                label="Repite Contraseña"
                type="password"
                :rules="[required,samecon]"
                outlined
            ></v-text-field>

            <br>

            <v-btn
                :loading="loading"
                block
                size="large"
                type="submit"
            >
              Sign In
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavBarAuth from "@/components/NavBarAuth.vue";
import firebase from "firebase/compat/app";
import router from '@/router';
export default {
  name: "SignIn",
  data: () => ({
    mat: "",
    corrt: "",
    nombre: "",
    con1: "",
    con2: "",
    corr: "",
  }),

  methods: {
    onSubmit () {
      firebase.auth().createUserWithEmailAndPassword(this.corrt, this.con1)
          .then(() => {
            // Guardar los datos adicionales del usuario en la base de datos de Firebase
            const db = firebase.firestore()
            db.collection('users').doc(firebase.auth().currentUser.uid).set({
              fullName: this.nombre,
              matricula: this.mat,
              personalEmail: this.corr
            })
                .then(() => {
                  setTimeout(() => {
                    router.push('/Alumno')
                  }, 500);
                })
                .catch((error) => {
                  console.error(error)
                })
          })
          .catch((error) => {
            console.error(error)
          })
    },
    required (v) {
      return !!v || 'Se requiere completar el campo'
    },
    validcorr (v) {
      return v.includes("@") && (v.includes(".com") || v.includes(".mx")) || 'Correo invalido por formato (*@*.com / *@*.mx)'
    },
    validcorrtec (v) {
      return v.includes("@tec.mx") || 'Correo no institucional'
    },
    samecon (x) {
      return x === this.con1 || 'contraseñas no coinciden'
    },
    minlen (v) {
      return v.length >= 6 || 'Contraseña debe tener minimo 6 caracteres'
    },
    valmat (v) {
      return v.length === 9 || 'Matricula requiere de 9 posiciones'
    },
  },
  components: {
    NavBarAuth
  },
}
</script>

<style scoped>

</style>