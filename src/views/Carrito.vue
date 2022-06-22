<template>
  <div class="container mt-5">
    <h4>Carrito</h4>
    <div class="list-group">
      <label class="list-group-item">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <img
              :src="require(`@/assets/img/camara.jpg`)"
              class="card-img-top"
              style="max-height: 150px; max-width: 150px"
            />
            <div class="d-flex flex-row">
              <div class="ms-4 align-self-center">
                <p>Cámara de fotos</p>
                <h4>$15.588</h4>
              </div>
              <div
                class="btn-group btn-carrito align-self-center ms-5"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" class="btn btn-outline-success">
                  <i class="bi bi-dash"></i>
                </button>
                <button type="button" class="btn btn-outline-success disabled">
                  0
                </button>
                <button type="button" class="btn btn-outline-success">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <button
            class="btn btn-danger align-self-center"
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
      <label class="list-group-item">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <img
              :src="require(`@/assets/img/apple.jpg`)"
              class="card-img-top"
              style="max-height: 150px; max-width: 150px"
            />
            <div class="d-flex flex-row">
              <div class="ms-4 align-self-center">
                <p>Cámara de fotos</p>
                <h4>$15.588</h4>
              </div>
              <div
                class="btn-group btn-carrito align-self-center ms-5"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" class="btn btn-outline-success">
                  <i class="bi bi-dash"></i>
                </button>
                <button type="button" class="btn btn-outline-success disabled">
                  0
                </button>
                <button type="button" class="btn btn-outline-success">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <button
            class="btn btn-danger align-self-center"
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
      <label class="list-group-item">
        <div class="d-flex justify-content-end">
          <div class="d-flex flex-column">
            <h3>Total: $30.000</h3>
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
export default {
  name: "carrito-app",
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
