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
        <v-btn align="right" justify="right" style="color: #384ffe" text @click.stop="dialog=true">
          Ver Detalles
        </v-btn>
      </div>
      <v-dialog
          v-model="dialog"
          width="400"
      >
        <v-card>
          <v-card-title style="color:#384ffe">{{ materia }}</v-card-title>
          <v-card-text style="color:#787c9d">
            Profesor : {{ prof }}
          </v-card-text>
          <v-card-text style="color:#787c9d">
            Salón : {{ classroom }}
          </v-card-text>
          <v-card-text style="color:#787c9d">
            Días : {{ daysclass }}
          </v-card-text>
          <v-card-text style="color:#787c9d">
            Horario : {{ timeclass }}
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="dialog = false" style="color: #384ffe" justify="right" class="ml-auto">
              Cerrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
  data() {
    return {
      dialog: false,
    }
  }
};
</script>

<style scoped></style>