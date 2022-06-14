<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="text-decoration-none text-muted" >
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
        <button
          class="btn btn-secondary btn-sm disabled me-2"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Favoritos"
          type="button"
        >
          <i class="bi bi-heart"></i>
        </button>
        <button
          class="btn btn-secondary btn-sm disabled"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Carrito de compras"
          type="button"
        >
          <i class="bi bi-cart"></i>
        </button>
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
