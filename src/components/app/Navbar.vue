<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="text-decoration-none text-muted">
        vue-commerce
      </router-link>
      <form class="d-flex">
        <div class="md-form form-group w-500">
          <input
            v-model="buscador"
            class="form-control form-control-sm"
            type="search"
            placeholder="Buscar productos"
            aria-label="Search"
          />
          <ol
            v-if="activarCoincidencias"
            class="list-group list-group-numbered w-500"
            style="position: absolute; z-index: 1"
          >
            <li
              v-for="(coincidencia, index) in coincidencias"
              :key="index"
              class="list-group-item"
              style="cursor:pointer"
              @click="verProducto(coincidencia)"
            >
              {{ coincidencia.descripcion }}
            </li>
          </ol>
        </div>
        <button class="btn btn-outline-success btn-sm" type="submit">
          Buscar
        </button>
      </form>
      <div class="d-flex">
        <router-link to="/favoritos">
          <button
            class="btn btn-secondary btn-sm me-2 gray-100"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Favoritos"
            type="button"
          >
            <i class="bi bi-heart"></i>
          </button>
        </router-link>
        <router-link to="/carrito">
          <button
            class="btn btn-secondary btn-sm"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Carrito de compras"
            type="button"
          >
            <i class="bi bi-cart"> </i>
            <span class="badge bg-secondary">{{ carrito.length }}</span>
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar-App",

  data() {
    return {
      buscador: null,
      coincidencias: [],
      activarCoincidencias:false,
    };
  },
  computed: {
    carrito() {
      return this.$store.state.carrito;
    },
    productos() {
      return this.$store.state.productos;
    },
  },
  methods: {
    verProducto(coincidencia) {
      this.activarCoincidencias = false;
      this.$router.push(`/producto/${coincidencia.id}`);
    },
  },
  watch: {
    buscador() {
      if (this.buscador && this.buscador.trim() != "") {
        this.coincidencias = this.productos.filter((producto) =>
          producto.descripcion
            .toUpperCase()
            .includes(this.buscador.toUpperCase())
        );
        this.activarCoincidencias = true;
      } else {
        this.activarCoincidencias = false;
        this.coincidencias = [];
      }
    },
  },
};
</script>

<style scope>
.w-500 {
  width: 500px;
}
</style>
