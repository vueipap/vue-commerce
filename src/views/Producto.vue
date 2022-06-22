<template>
  <div class="products mt-5" v-if="producto.imagen">
    <div class="container">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="require(`@/assets/img/${producto.imagen}`)"
              class="img-fluid rounded-start"
              style="max-height: 200px"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Producto: {{ producto.descripcion }}</h5>
              <h4>${{ producto.precio }}</h4>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="row">
              <div class="position-absolute col-2 bottom-0 mb-2">
                <div class="d-grid">
                  <button
                    @click="agregarCarrito(producto)"
                    class="btn btn-outline-success btn-sm"
                    type="button"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Products-App",
  data() {
    return {
      producto: {},
    };
  },
  computed: {
    productos() {
      return this.$store.state.productos;
    },
  },
  watch: {
    "$route.params.id": {
      handler: function (search) {
        this.producto = this.productos.filter(
          (producto) => producto.id == parseInt(search)
        )[0];
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapMutations(["agregarCarrito"]),
  },
};
</script>

<style></style>
