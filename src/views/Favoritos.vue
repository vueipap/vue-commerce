<template>
  <div class="container mt-5">
    <h4>Favoritos</h4>
    <div class="list-group">
      <label class="list-group-item" v-for="(favorito,index) in favoritos" :key="index">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <img
              :src="require(`@/assets/img/${favorito.imagen}`)"
              class="card-img-top"
              style="max-height: 150px; max-width: 150px"
            />
            <div class="ms-4 align-self-center">
              <p>{{favorito.descripcion}}</p>
              <h4>$ {{favorito.precio}}</h4>
            </div>
          </div>
          <button
            @click="eliminarFavorito(favorito)"
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
import { mapMutations } from "vuex";
import { mapState } from 'vuex'
export default {
  name: "favoritos-app",
  computed:{
    ...mapState(['favoritos'])
  },
  methods: {
    ...mapMutations(['eliminarFavorito'])
  }
};
</script>

<style></style>
