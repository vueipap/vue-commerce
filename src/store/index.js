import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    productos: [
      {
        id: 1,
        descripcion: "Luces LED",
        imagen: "apple.jpg",
        precio: 5.025,
        oferta: false,
        categoria: "tecnologia",
      },
      {
        id: 2,
        descripcion: "Joystick inalámbrico",
        imagen: "jostick_ps4.jpg",
        precio: 4.299,
        oferta: false,
        categoria: "tecnologia",
      },
      {
        id: 3,
        descripcion: "Parlante",
        imagen: "parlante.jpg",
        precio: 5.699,
        oferta: true,
        categoria: "tecnologia",
      },
      {
        id: 4,
        descripcion: "VR Ps4",
        imagen: "vr.jpg",
        precio: 69.999,
        categoria: "tecnologia",
      },
      {
        id: 5,
        descripcion: "Guitarra Criolla",
        imagen: "guitarra.jpg",
        precio: 7.999,
        oferta: true,
        categoria: "musica",
      },
      {
        id: 6,
        descripcion: "Raqueta de tenis profesional",
        imagen: "raqueta.jpg",
        precio: 21.659,
        oferta: false,
        categoria: "deporte",
      },
      {
        id: 7,
        descripcion: "Pelota Jabulani",
        imagen: "pelota.jpg",
        precio: 21.659,
        oferta: true,
        categoria: "deporte",
      },
      {
        id: 8,
        descripcion: "Teclado Yamaha",
        imagen: "teclado.jpg",
        precio: 21.659,
        oferta: false,
        categoria: "musica",
      },
      {
        id: 9,
        descripcion: "Sillon 3 cuerpos",
        imagen: "sillon.jpg",
        precio: 80.659,
        oferta: true,
        categoria: "hogar",
      },
    ],
    carrito: [],
    favoritos: [],
  },

  mutations: {
    agregarCarrito(state, producto) {
      const nuevoProducto = { ...{ cantidad: 1 }, ...producto }
      state.carrito.push(nuevoProducto);
    },
    agregarFavorito(state, producto) {
      state.favoritos.push(producto)
    },
    eliminarFavorito(state, producto) {
      state.favoritos = state.favoritos.filter(favorito => favorito.id != producto.id)
    },
    eliminarCarrito(state, producto) {
      state.carrito = state.carrito.filter(c => c.id != producto.id)
    }
  },
})

export default store