<template>

  <section class="src-components-formulario">
    <div class="container mt-top">
      
        <div class="col-md-12">
          <div class="card">
              <h5 class="card-header">Formulario</h5>
              <div class="card-body">
                <form novalidate autocomplete="off" @submit.prevent="enviar()">
                  <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" class="form-control" v-model="$v.f.nombre.$model">
                  </div>
                  <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger">
                    <!--
                    <div>
                      {{$v.f.nombre}}
                    </div>
                    -->
                    <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
                    <div v-else-if="$v.f.nombre.minLength.$invalid">Este campo debe tener {{$v.f.nombre.minLength.$params.min}} caracteres como minimo</div>
                    <div v-else-if="$v.f.nombre.maxLength.$invalid">Este campo debe tener {{$v.f.nombre.maxLength.$params.max}} caracteres como maximo</div>
                  </div>
                  <div class="form-group">
                    <label for="importe">Importe</label>
                    <input type="text" id="importe" class="form-control" v-model="$v.f.importe.$model">
                  </div>
                  <div v-if="$v.f.importe.$error && $v.f.importe.$dirty" class="alert alert-danger">
                    <div v-if="$v.f.importe.required.$invalid">Este campo es requerido</div>
                    <div v-else-if="$v.f.importe.numeric.$invalid">Este campo debe ser numerico</div>
                  </div>
                  <div class="form-group">
                    <label for="descripcion">Descripcion</label>
                    <textarea id="descripcion" class="form-control" v-model="$v.f.descripcion.$model"></textarea>
                  </div>
                  <div v-if="$v.f.descripcion.$error && $v.f.descripcion.$dirty" class="alert alert-danger">
                    <div v-if="$v.f.descripcion.required.$invalid">Este campo es requerido</div>
                  </div>
                  <div class="form-group">
                    <input class="btn btn-success btn-md" type="submit" value="Enviar" :disabled="!(!$v.f.$invalid && $v.f.descripcion.$dirty && $v.f.importe.$dirty && $v.f.nombre.$dirty)">
                  </div>
                </form>
              </div>
          </div>
        </div>
      
    </div>
  </section>

</template>

<script>
  import { required, maxLength, minLength, numeric } from '@vuelidate/validators'
  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        f: this.resetCampos(),
        url: 'https://5f9509db2de5f50016ca1c9d.mockapi.io/api/v1/gastos',
      }
    },
    validations: {
      f: {
        nombre: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(15)
        },
        importe: {
          required,
          numeric
        },
        descripcion: {
          required
        }
      }
    },
    methods: {
      async sendDatosForm(datos) {
        try {
          await this.axios.post(this.url, datos, {
            'content-type': 'application/json'
          })
        } catch (error) {
          console.error(error)
        }
      },
      enviar() {
        let datosForm = {
          nombre: this.$v.f.nombre.$model,
          importe: this.$v.f.importe.$model,
          descripcion: this.$v.f.descripcion.$model
        }
        
        this.sendDatosForm(datosForm);
        this.f = this.resetCampos();
        this.$v.$reset();
        
      },
      resetCampos() {
        return {
          nombre: '',
          importe: '',
          descripcion: ''
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
    label{
      float: left;
    }
</style>
