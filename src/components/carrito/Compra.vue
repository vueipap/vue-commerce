<template>
  <form
    ref="form-compra"
    @submit="comprar($event)"
    class="needs-validation"
    novalidate
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Completar Datos</h5>
        </div>
        <div class="modal-body">
          <label for="nombre" class="form-label">Nombre</label>
          <div class="input-group has-validation">
            <input
              v-model="compra.nombre"
              type="text"
              class="form-control"
              id="nombre"
              placeholder=""
              required
            />
            <div class="invalid-feedback">Ingrese nombre.</div>
          </div>
          <div class="mb-2">
            <label for="apellido" class="form-label">Apellido</label>
            <div class="input-group has-validation">
              <input
                v-model="compra.apellido"
                type="text"
                class="form-control"
                id="apellido"
                placeholder=""
                required
              />
              <div class="invalid-feedback">Ingrese apellido.</div>
            </div>
          </div>
          <div class="mb-2">
            <label for="email" class="form-label">Email</label>
            <div class="input-group has-validation">
              <input
                v-model="compra.email"
                type="email"
                class="form-control"
                id="email"
                placeholder="name@example.com"
                required
              />
              <div class="invalid-feedback">Ingrese un email.</div>
            </div>
          </div>
          <div class="mb-2">
            <label for="sucursal" class="form-label">Entrega</label>
            <div class="input-group has-validation">
              <div class="form-check me-5">
                <input
                  v-model="compra.entrega"
                  class="form-check-input"
                  type="radio"
                  name="entrega"
                  value="sucursal"
                  id="sucursal"
                  required
                />
                <label class="form-check-label" for="sucursal">
                  Retiro sucursal
                </label>
              </div>
              <div class="form-check">
                <input
                  v-model="compra.entrega"
                  class="form-check-input"
                  type="radio"
                  name="entrega"
                  id="domicilio"
                  value="domicilio"
                  required
                />
                <label class="form-check-label" for="domicilio">
                  Envío a domicilio
                </label>
              </div>
            </div>
          </div>
          <div v-if="compra.entrega === 'domicilio'" class="mb-2">
            <label for="direccion" class="form-label">Dirección</label>
            <div class="input-group has-validation">
              <input
                v-model="compra.direccion"
                type="text"
                class="form-control"
                id="direccion"
                placeholder=""
                required
              />
            </div>
            <div class="invalid-feedback">Ingrese una dirección.</div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            ref="modal-close"
          >
            Cerrar
          </button>
          <button type="submit" class="btn btn-success">
            Confirmar compra
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "compra-app",
  data() {
    return {
      compra: {entrega:'sucursal'},
    };
  },
  methods: {
    ...mapMutations(['vaciarCarrito']),
    comprar(event) {
      event.preventDefault();
      event.stopPropagation();
      if (!this.$refs["form-compra"].checkValidity()) {
        this.$refs["form-compra"].classList.add("was-validated");
      }
      else{
        this.vaciarCarrito();
        this.$refs['modal-close'].click();
        this.$emit('success')
      }
    },
  },
};
</script>

<style></style>
