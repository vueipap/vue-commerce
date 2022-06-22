<template>
  <div class="home">
    <div class="container text-center">
      <div
        class="btn-group btn-group-sm"
        role="group"
        aria-label="Basic outlined example"
      >
        <button type="button" class="btn btn-outline-success">OFERTAS</button>
        <button type="button" class="btn btn-outline-success">DEPORTES</button>
        <button type="button" class="btn btn-outline-success">MÚSICA</button>
        <button type="button" class="btn btn-outline-success">HOGAR</button>
        <button type="button" class="btn btn-outline-success">
          TECNOLOGÍA
        </button>
      </div>
    </div>
    <div class="card mt-5">
      <div class="card-body">
        <i class="bi bi-tag-fill"></i><span class="fw-bold">PRODUCTOS</span>
      </div>
    </div>
    <!-- SECCIÓN PRODUCTOS -->
    <div class="row mt-2">
      <div class="col-6 col-md-4" v-for="(producto, i) in productos" :key="i">
        <div class="card mb-3 card-product" style="max-height: 400px">
          <img
            :src="require(`@/assets/img/${producto.imagen}`)"
            class="card-img-top"
            style="max-height: 200px"
            :key="i"
          />
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5 class="card-title">$ {{ producto.precio }}</h5>
              <span class="text-end"><i class="bi bi-heart"></i></span>
            </div>
            <p class="card-text">
              {{ producto.descripcion }}
            </p>
            <p class="card-text">
              <small class="text-muted">Publicado: 17/05/2021</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home-App",
  data() {
    return {
      productos: [
        {
          descripcion: "Luces LED",
          imagen: "apple.jpg",
          precio: "5.025",
          oferta: false,
        },
        {
          descripcion: "Joystick inalámbrico",
          imagen: "jostick_ps4.jpg",
          precio: "4.300",
          oferta: false,
        },
        {
          descripcion: "Parlante",
          imagen: "parlante.jpg",
          precio: "5.699",
          oferta: true,
        },
        { descripcion: "VR Ps4", imagen: "vr.jpg", precio: "69.999" },
        {
          descripcion: "Guitarra Criolla",
          imagen: "guitarra.jpg",
          precio: "7.999",
          oferta: true,
        },
        {
          descripcion: "Raqueta de tenis profesional",
          imagen: "raqueta.jpg",
          precio: "21.659",
          oferta: false,
        },
        {
          descripcion: "Pelota Jabulani",
          imagen: "pelota.jpg",
          precio: "21.659",
          oferta: true,
        },
        {
          descripcion: "Teclado Yamaha",
          imagen: "teclado.jpg",
          precio: "21.659",
          oferta: false,
        },
        {
          descripcion: "Sillon 3 cuerpos",
          imagen: "sillon.jpg",
          precio: "80.659",
          oferta: true,
        },
      ],
    };
  },
};
</script>
