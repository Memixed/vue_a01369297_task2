<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" align="center" justify="center">
        <h1 class="display-2 font-weight-bold mb-3" style="color: #384ffe">
          Informacion del alumno
        </h1>
        <v-img
            :src="require('../assets/juan-escutia2.jpeg')"
            class="rounded-circle"
            height="300"
            width="300"
            border="50"
        />
      </v-col>
      <v-col cols="12" justify="center">
        <v-row>
          <v-col class="mb-4 text-md-left text-sm-center" cols="12" md="8">
            <h3 style="color: #384ffe">Nombre del alumno</h3>
            <h3 style="color: #787c9d">Juan Escutia</h3>
          </v-col>
          <v-col class="mb-4 text-md-left text-sm-center" cols="12" md="4">
            <h3 style="color: #384ffe">Matrícula</h3>
            <h3 style="color: #787c9d">A01361234</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mb-4 text-md-left text-sm-center" cols="12" md="8">
            <h3 style="color: #384ffe">Correo Institucional</h3>
            <h3 style="color: #787c9d">A01361234@tec.mx</h3>
          </v-col>
          <v-col class="mb-4 text-md-left text-sm-center" cols="12" md="4">
            <h3 style="color: #384ffe">Carrera</h3>
            <h3 style="color: #787c9d">ISC</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mb-4 text-md-left text-sm-center" cols="12" md="8">
            <h3 style="color: #384ffe">Correo Personal</h3>
            <h3 style="color: #787c9d">murioporlapatria@gmail.com</h3>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style></style>
