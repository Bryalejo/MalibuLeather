<template>
    <div class=" flex flex-col items-start justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <h2>Carrito de Compras</h2>
        <table class="w-1/3">
            <thead>
        <tr>
          <th>Productos</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Sub-Total</th>
        </tr>
      </thead>
      <tbody>
        <Item v-for="item in items" :key="item.id" :item="item"></Item>
      </tbody>
          
        </table>
    </div>
    </template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Item from "./Item.vue";
import Carrito from "./Carrito.vue";
export default {
  components: {
    Item,
    Carrito
  },
  setup() {
    const store = useStore();
    const items = computed(() => store.state.carrito);
    const totalCantidad = computed(() => store.getters.totalCantidad);
    const totalPrecio = computed(() => store.getters.totalPrecio);
    const vaciar = () => {
      store.commit("vaciarCarrito");
    };
    return { items, totalCantidad, totalPrecio, vaciar };
  },
};
</script>
