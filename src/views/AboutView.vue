<template>
  <v-container>
    <NavBarAlumno></NavBarAlumno>
    <v-row class="text-center">
      <v-col cols="12" align="center" justify="center">
        <h1 class="display-2 font-weight-bold mb-3" style="color: #384ffe">
          Listado de Materias
        </h1>
      </v-col>
    </v-row>
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
import NavBarAlumno from "@/components/NavBarAlumno.vue";
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