<template>
  <v-container>
    <NavBarAuth></NavBarAuth>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3" style="color: #384ffe">
          Inicia Sesión
        </h1>
        <v-card class="mx-auto px-6 py-8" max-width="344">
          <v-form
              v-model="form"
              @submit.prevent="onSubmit"
          >
            <v-text-field
                v-model="email"
                :readonly="loading"
                :rules="[required, validcorr]"
                class="mb-2"
                clearable
                label="Correo:"
                outlined
            ></v-text-field>
            <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Contraseña: "
                @click:append="show1 = !show1"
                outlined
            ></v-text-field>

            <br>

            <v-btn
                :disabled="!form"
                :loading="loading"
                block
                color="success"
                size="large"
                type="submit"
                variant="elevated"
            >
              Log In
            </v-btn>
          </v-form>
        </v-card>
        <v-dialog ref="dialog" v-model="dialogVisible" width="300">
          <v-card>
            <v-card-title>Error de inicio de sesión</v-card-title>
            <v-card-text>Credenciales inválidas</v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="dialogVisible = false">Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase/compat/app";
import router from '@/router'
import NavBarAuth from "@/components/NavBarAuth.vue"
export default {
  name: "LogIn",
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
    show1: false,
    show2: true,
    rules: {
      required: value => !!value || 'Requerido.',
      min: v => v.length >= 6 || 'Min 6 caracteres',
    },
    dialogVisible: false,
  }),

  methods: {
    onSubmit () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        router.push('/Alumno');
      })
          .catch((error) => {
            this.dialogVisible = true;
          });
    },
    required (v) {
      return !!v || 'Se requiere completar el campo'
    },
    validcorr (v) {
      return v.includes("@") && (v.includes(".com") || v.includes(".mx")) || 'Correo invalido por formato (*@*.com / *@*.mx)'
    }
  },
  components: {NavBarAuth},
}
</script>

<style scoped>

</style>