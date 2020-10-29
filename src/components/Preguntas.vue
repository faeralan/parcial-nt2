<template>

  <section class="src-components-preguntas">
    <div class="container mt-top">
      
      <table class="table table-striped">
        
        <thead>
          <tr>
            <td>Pregunta</td>
            <td>Respuesta</td>
          </tr>
        </thead>
        <tbody v-if="preguntas.length > 0">
          <tr v-for="(dato, i) in preguntas" :key="i">
            <td>{{dato.pregunta}}</td>
            <td>{{dato.respuestas.join()}}</td>
          </tr>
          
        </tbody>

      </table>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-preguntas',
    props: [],
    mounted () {
      this.armarTabla()
    },
    data () {
      return {
        preguntas: [
          {pregunta: 1, respuestas: ['b', 'd']},
          {pregunta: 2, respuestas: ['b']},
          {pregunta: 3, respuestas: ['c']},
          {pregunta: 4, respuestas: ['d']},
          {pregunta: 5, respuestas: ['b','e']}
        ]
      }
    },
    methods: {
      armarTabla(){
        
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .mt-top{
      margin-top: 50px;
    }
</style>
