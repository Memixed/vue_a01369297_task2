/* eslint-disable */
<template>
  <div class="ma-6">
    <v-card style="border-radius: 30px" class="ma-5">
      <v-card-title style="color: #384ffe">
        {{ materia }}
      </v-card-title>
      <v-card-text align="left" justify="left" style="color: #787c9d">
        Profesor : {{ prof }}
      </v-card-text>
      <div align="right">
        <v-btn align="right" justify="right" style="color: #384ffe" text>
          Ver Detalles
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ReusableCard",
  props: {
    materia: String,
    prof: String,
    classroom: String,
    timeclass: String,
    daysclass: String,
  },
};
</script>

<style scoped></style>