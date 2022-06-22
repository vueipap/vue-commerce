<template>
  <div class="container mt-5">
    <h4>Favoritos</h4>
    <div class="list-group">
      <label class="list-group-item">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <img
              :src="require(`@/assets/img/camara.jpg`)"
              class="card-img-top"
              style="max-height: 150px; max-width: 150px"
            />
            <div class="ms-4 align-self-center">
              <p>Cámara de fotos</p>
              <h4>$15.588</h4>
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
              :src="require(`@/assets/img/parlante.jpg`)"
              class="card-img-top"
              style="max-height: 150px; max-width: 150px"
            />
            <div class="ms-4 align-self-center">
              <p>Monitor</p>
              <h4>$45.588</h4>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "favoritos-app",
};
</script>

<style></style>
