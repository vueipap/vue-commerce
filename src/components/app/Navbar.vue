<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="text-decoration-none text-muted">
        vue-commerce
      </router-link>
      <form class="d-flex">
        <div class="md-form form-group w-500">
          <input
            class="form-control form-control-sm"
            type="search"
            placeholder="Buscar productos"
            aria-label="Search"
          />
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
            <span class="badge bg-secondary">0</span>
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar-App",
};
</script>

<style scope>
.w-500 {
  width: 500px;
}
</style>
