<template>
  <v-container>
    <ReusableCard v-for="n in 7" :key="n"
                  materia="Titulo de la materia"
                  prof="Cristiano Ronaldo"
                  classroom="La Congeladora"
                  daysclass="Lunes, Martes & Miercoles"
                  timeclass="7:00 - 9:00"></ReusableCard>
  </v-container>
</template>
<script setup>
import ReusableCard from "@/components/ReusableCard.vue";
</script>