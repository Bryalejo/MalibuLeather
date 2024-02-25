<script>

import Card from "./Card.vue";
import Carrito from "./Carrito.vue"
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Card,
    Carrito
  },
  setup(){
    const store = useStore();
    onMounted(() => {
      store.dispatch("fetchData");
    });
    const productos = computed(() => store.state.productos);
    // const carrito = computed( () => store.state.carrito)
    const productosFiltrados = computed(() => {
      return productos.value.filter((producto) => producto.gender === 'F');
    });

    return { productosFiltrados };
  },
  
};
</script>
<template>
  
  <div class="container mx-10 my-28">
    <span class="text-gray-500 font-semibold">Inicio/Mujer/Accesorios</span>
  </div>
  
  <div class="mx-5 flex justify-center items-center my-2 ">
    <div class="grid grid-cols-3 gap-10">
      <Card v-for="producto of productosFiltrados" :key="producto.id"
      :producto="producto"
      />
    </div>
  </div>
  
</template>
