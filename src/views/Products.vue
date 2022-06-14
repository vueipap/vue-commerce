<template>
  <div class="products mt-5">
    <div class="container">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-8">
            <img
              src="https://pixabay.com/get/gf02480279a21e74c96815468f368138bb44f98f0ec22ff6957e122c18181f9be8bf1619ec3ca2da21a22ececc03b4d6bdfca10efb18dd044d527bc78d7f1b4ddbf09076d1027e340f084933392e11765_640.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-4">
            <div class="card-body">
              <h5 class="card-title">Producto {{$route.params.id}}</h5>
              <h4>$18.500
              </h4>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="row">
              <div class="position-absolute col-4 bottom-0 mb-2">
                <div class="d-grid">
                  <button class="btn btn-outline-success btn-sm" type="button">Agregar al carrito</button>
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
export default {
  name: "Products-App",
};
</script>

<style></style>
