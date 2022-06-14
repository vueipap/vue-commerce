<template>
  <div class="home mt-5">
    <div class="row">
      <div class="col-6 col-md-4" v-for="i in 7" :key="i">
        <div class="card mb-3">
          <img
            src="https://pixabay.com/get/gf02480279a21e74c96815468f368138bb44f98f0ec22ff6957e122c18181f9be8bf1619ec3ca2da21a22ececc03b4d6bdfca10efb18dd044d527bc78d7f1b4ddbf09076d1027e340f084933392e11765_640.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5 class="card-title">$1.800</h5>
              <span class="text-end"><i class="bi bi-heart"></i></span>
            </div>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
            </p>
            <p>
              <router-link class="btn btn-primary" :to="`/products/${i}`">
                Detalle
              </router-link>
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home-App",
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.users = response.data;
  },
};
</script>
