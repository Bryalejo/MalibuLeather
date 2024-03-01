<template>
  <div class="grid grid-cols-2">
    <div class="mt-32 ml-20 md:h-screen lg:py-0">
      <h2 class="text-2xl font-semibold">Resumen de Compras</h2>
      <table class="w-2/3 border-2">
        <thead>
          <tr>
            <th class="text-left">Productos</th>
          </tr>
        </thead>
        <tbody>
          <Item v-for="item in items" :key="item.id" :item="item"></Item>
        </tbody>
      </table>
    </div>
    <div class="mt-32 flex w-1/4 h-1/5 bg-slate-200">
      <div class="flex flex-col ml-4">
        <div>
          <h2 class="text-2xl font-semibold">Totales:</h2>
        </div>
        <div class="flex">
          <div class="text-gray-400">
            Sub-total: &nbsp;
            <span class="font-semibold text-black"
              >S/{{ totalCantidad * totalPrecio }}.00</span
            >
          </div>
        </div>
        <div class="text-gray-400">
          Envío:<span class="text-black font-semibold ml-10">Gratis</span>
        </div>
        <div class="text-gray-400">
          Descuento : <span class="text-black font-semibold">S/0.00</span>
        </div>
        <br />
        <div class="font-semibold">
          Total a pagar: <span>S/{{ totalCantidad * totalPrecio }}.00</span>
        </div>
        <button
          @click="realizarPago"
          class="mt-4 bg-orange-400 text-white px-14 py-2 hover:bg-amber-500"
        >
          Realizar Pago
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Item from "./Item.vue";
import Carrito from "./Carrito.vue";
import router from "@/router";
export default {
  components: {
    Item,
    Carrito,
  },
  setup() {
    const store = useStore();
    const items = computed(() => store.state.carrito);
    const totalCantidad = computed(() => store.getters.totalCantidad);
    const totalPrecio = computed(() => store.getters.totalPrecio);
    const vaciar = () => {
      store.commit("vaciarCarrito");
    };
    const realizarPago = () => {
      router.push({ name: "pago" });
    };
    return { items, totalCantidad, totalPrecio, vaciar, realizarPago };
  },
};
</script>
