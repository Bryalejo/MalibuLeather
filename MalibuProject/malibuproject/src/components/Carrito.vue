<template>
  <div>
    <div class="ml-4 ">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        Tú carrito de Compras
      </h3>
      <ul
        class="md:w-11/12 sm:w-full text-sm max-h-96 font-medium text-gray-900 bg-white border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white overflow-auto"
      >
        <li
          class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
        >
          <Item v-for="item in items" :key="item.id" :item="item" />
        </li>
        <div class="inline-flex gap-4">
          <span>Total a pagar: S/{{ totalPrecio }}.00</span>
          <span v-if="Object.keys(items).length === 0">Carrito Vacio</span>
          <span v-else>Total de productos: {{ totalCantidad }}</span>
          <button @click="procesarPago"  class="text-white rounded-lg px-1 py-1 bg-slate-900  border-slate-900">
            Pagar Ahora 
          </button>
          <button
            class="bg-yellow-500 rounded-lg px-1 py-1 text-white"
            @click="vaciar"
          >
            Vaciar carrito
          </button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Item from "./Item.vue";
import router from "@/router";
export default {
  components: {
    Item,
  },
  setup() {
    const store = useStore();
    const items = computed(() => store.state.carrito);
    const totalCantidad = computed(() => store.getters.totalCantidad);
    const totalPrecio = computed(() => store.getters.totalPrecio);
    const vaciar = () => {
      store.commit("vaciarCarrito");
    };
    const procesarPago = ()=>{
      router.push({name: 'pasarela'})
    }
    return { items, totalCantidad, totalPrecio, vaciar, procesarPago };
  },
};
</script>
