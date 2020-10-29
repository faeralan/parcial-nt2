<template>

  <section class="src-components-gastos">
    <div class="container mt-top">
      <table class="table table-striped">
        
        <tr>
            <td colspan="4"><p class="f-left">Presupuesto: </p></td>
            <td><input class="form-control" type="text" v-model="presupuesto" />
            </td>
          </tr>
      </table>
      <table class="table table-striped">
        
        <thead>
          <tr>
            <td>ID</td>
            <td>Nombre</td>
            <td>Descripcion</td>
            <td>Importe</td>
            <td>Fecha</td>
          </tr>
        </thead>
        <tbody v-if="gastos.length > 0">
          <tr v-for="(dato, i) in gastos" :key="i">
              <td>{{ dato.id }}</td>
              <td>{{ dato.nombre }}</td>
              <td>{{ dato.descripcion }}</td>
              <td>{{ formatearImporte(dato.importe) }}</td>
              <td>{{ formatearFecha(dato.createdAt) }}</td>
          </tr>
          <tr>
            <td colspan="4"><p class="f-left">Total: </p></td>
            <td><p :style="{'color': cambiarColor()}">{{total}}</p></td>
          </tr>
        </tbody>
        <tbody v-else-if="gastos.length == 0">
          <tr>
            <td colspan="5">
              <div class="alert alert-danger">No hay gastos cargados</div>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  </section>

</template>

<script>
  import filter from '../filterMixins.js'
  export default  {
    name: 'src-components-gastos',
    props: [],
    mixins: [filter],
    mounted () {
      this.getGastos()
    },
    data () {
      return {
        url: 'https://5f9509db2de5f50016ca1c9d.mockapi.io/api/v1/gastos',
        gastos: [],
        total: 0,
        presupuesto: 0,
        color: ''
      }
    },
    methods: {
       async getGastos() {
        try {
          let data = await this.axios.get(this.url, {
            'content-type': 'application/json'
          })
          this.gastos = data.data;
          
          this.calcularTotal()
        } catch (error) {
          console.error(error)
        }
      },
      calcularTotal(){
        this.gastos.forEach(gasto => {
          this.total += Number.parseFloat(gasto.importe)
        });
        this.cambiarColor()
      },
      cambiarColor(){
        if(this.presupuesto < this.total){
          return 'red';
        }else if (this.total < 1000) {
          return 'green'
        } else if (this.total > 1000 && this.total < 5000) {
          return 'magenta'
        } else {
          return 'orange'
        }
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
  .f-left{
    float: left;
  }
</style>
