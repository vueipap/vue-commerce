<template>
  <div class="container mt-5">
    <h4>Carrito</h4>
    <div class="list-group">
      <label class="list-group-item" v-for="(c,index) in carrito" :key="index">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <img
              :src="require(`@/assets/img/${c.imagen}`)"
              class="card-img-top"
              style="max-height: 150px; max-width: 150px"
            />
            <div class="d-flex flex-row">
              <div class="ms-4 align-self-center">
                <p>{{c.descripcion}}</p>
                <h4>${{c.precio}}</h4>
              </div>
              <div
                class="btn-group btn-carrito align-self-center ms-5"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" class="btn btn-outline-success" :disabled="c.cantidad == 1" @click="c.cantidad -= 1">
                  <i class="bi bi-dash"></i>
                </button>
                <button type="button" class="btn btn-outline-success disabled">
                  {{c.cantidad}}
                </button>
                <button type="button" class="btn btn-outline-success" @click="c.cantidad += 1">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <button
            class="btn btn-danger align-self-center"
            @click="eliminarCarrito(c)"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Favoritos"
            type="button"
            style="max-height: 50px; max-width: 50px"
          >
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </label>
      <label class="list-group-item" v-if="carrito.length">
        <div class="d-flex justify-content-end">
          <div class="d-flex flex-column">
            <h3>Total: ${{total | currency}}</h3>
            <button type="button" class="btn btn-success">
              COMPRAR
            </button>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "carrito-app",
  methods: {
    ...mapMutations(['eliminarCarrito'])
  },
  computed: {
    carrito(){
      return this.$store.state.carrito;
    },
    total(){
      const precios = this.carrito.map(c => c.precio * c.cantidad );
      const reducer = (accumulator, curr) => accumulator + curr;
      return precios.reduce(reducer)
    }
  },
  filters: {
    currency(value){
      let locale = Intl.NumberFormat('en-US');
      return locale.format(value)
    }
  }
};
</script>

<style>
.btn-carrito .btn:focus {
  box-shadow: 0 0 0 0 !important;
}

.btn-carrito .btn:hover {
  color: #198754;
  background-color: transparent;
  border-color: #198754;
}
</style>
