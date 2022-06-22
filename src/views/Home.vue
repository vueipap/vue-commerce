<template>
  <div class="home">
    <div class="container text-center">
      <div
        class="btn-group btn-group-sm"
        role="group"
        aria-label="Basic outlined example"
      >
        <router-link to="?tipo=oferta"
          ><button type="button" class="btn btn-outline-success">
            OFERTAS
          </button>
        </router-link>
        <router-link to="?tipo=deporte">
          <button type="button" class="btn btn-outline-success">
            DEPORTES
          </button>
        </router-link>
        <router-link to="?tipo=musica">
          <button type="button" class="btn btn-outline-success">MÚSICA</button>
        </router-link>
        <router-link to="?tipo=hogar">
          <button type="button" class="btn btn-outline-success">HOGAR</button>
        </router-link>
        <router-link to="?tipo=tecnologia">
          <button type="button" class="btn btn-outline-success">
            TECNOLOGÍA
          </button>
        </router-link>
      </div>
    </div>
    <div class="card mt-5">
      <div class="card-body">
        <i class="bi bi-tag-fill"></i
        ><span class="fw-bold">{{
          !tipo ? "PRODUCTOS" : tipo | uppercase
        }}</span>
      </div>
    </div>
    <!-- SECCIÓN PRODUCTOS -->
    <div class="row mt-2">
      <div
        class="col-6 col-md-4"
        v-for="(producto, i) in productosPorTipo"
        :key="i"
      >
        <div class="card mb-3" style="max-height: 400px">
          <router-link
            :to="`/producto/${producto.id}`"
            style="text-decoration: none"
          >
            <img
              :src="require(`@/assets/img/${producto.imagen}`)"
              class="card-img-top card-product"
              style="max-height: 200px"
              :key="i"
            />
          </router-link>
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5 class="card-title text-secondary">$ {{ producto.precio }}</h5>
              <span
                @click="accionFavorito(producto)"
                class="text-end text-secondary"
                style="cursor: pointer"
              >
                <i
                  class="bi"
                  :class="esFavorito(producto) ? 'bi-heart-fill' : 'bi-heart'"
                ></i>
              </span>
            </div>
            <p class="card-text text-secondary">
              {{ producto.descripcion }}
            </p>
            <p class="card-text">
              <span class="text-muted">Publicado: 17/05/2021</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Home-App",
  data() {
    return {
      tipo: null,
    };
  },
  methods: {
    ...mapMutations(["agregarFavorito", "eliminarFavorito"]),
    accionFavorito(producto) {
      const contieneProducto = this.favoritos.filter(
        (favorito) => favorito.id == producto.id
      );
      if (contieneProducto.length) {
        this.eliminarFavorito(producto);
      } else {
        this.agregarFavorito(producto);
      }
    },
    esFavorito(producto) {
      return this.favoritos.filter((favorito) => favorito.id == producto.id)
        .length;
    },
  },
  computed: {
    productos() {
      return this.$store.state.productos;
    },
    favoritos() {
      return this.$store.state.favoritos;
    },
    productosPorTipo() {
      if (this.tipo) {
        if (this.tipo == "oferta") {
          return this.productos.filter((producto) => producto.oferta);
        }
        return this.productos.filter(
          (producto) => producto.categoria == this.tipo
        );
      }
      return this.productos;
    },
  },
  watch: {
    "$route.query.tipo": {
      handler: function (search) {
        this.tipo = search;
      },
      deep: true,
      immediate: true,
    },
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },
};
</script>
<style scoped>
.card-product:hover {
  -webkit-box-shadow: 0 0 8px 8px #ddd;
  box-shadow: 0 0 6px 5px #ddd;
  border-radius: 6px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;
  border: 1px solid #dee2e6;
  cursor: pointer;
}
</style>
