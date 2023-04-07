<template>
  <v-container>
    <ReusableCard v-for="n in cursos"
                  :key="n"
                  :classroom="n.s"
                  :daysclass="n.d"
                  :materia="n.m"
                  :prof="n.p"
                  :timeclass="n.h">
    </ReusableCard>
  </v-container>
</template>
<script setup>
import ReusableCard from "@/components/ReusableCard.vue";
</script>
<script>
export default {
  data: () => ({
    cursos:[
      {m:'Titulo de la Materia',p:'Cristiano Ronaldo',d:'Lunes, Martes & Miercoles',s:'La Congeladora',h:'7:00 - 9:00'},
      {m:'Titulo de la Materia',p:'Cristiano Ronaldo',d:'Lunes, Martes & Miercoles',s:'La Congeladora',h:'7:00 - 9:00'},
      {m:'Titulo de la Materia',p:'Cristiano Ronaldo',d:'Lunes, Martes & Miercoles',s:'La Congeladora',h:'7:00 - 9:00'},
      {m:'Titulo de la Materia',p:'Cristiano Ronaldo',d:'Lunes, Martes & Miercoles',s:'La Congeladora',h:'7:00 - 9:00'},
      {m:'Titulo de la Materia',p:'Cristiano Ronaldo',d:'Lunes, Martes & Miercoles',s:'La Congeladora',h:'7:00 - 9:00'}
    ],
  }),
};
</script>