<template>
  <nav
    class="bg-gray-900 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="/" class="flex items-center">
        <img src="/imgs/Logo.png" class="h-8 mr-3" alt="Malibu Logo" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >ALIBÚ</span
        >
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button @click="toggleModal" type="button" class="text-white">
          <img src="/imgs/Comprar.svg" alt="" />{{ totalCantidad }}
        </button>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-whitebg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
          >
            <router-link to="/">Home</router-link>
          </li>
          <li
            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            <router-link to="/login">Ingresar</router-link>
          </li>
        
          <li
            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            <router-link to="/hombre">Hombre</router-link>
          </li>
          <li
            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            <router-link to="/mujer">Mujer</router-link>
          </li>
          <li
            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            <router-link to="/catalogo">Catálogo</router-link>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Contáctanos</a
            >
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <!-- Contenido del modal -->
    <div class="bg-white p-4  max-w-2xl">
      <Carrito />
    </div>
    <button
      type="button"
      @click="toggleModal"
      class="absolute top-4 right-4 text-yellow-500 hover:text-gray-900"
    >
      <svg class="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      <span class="sr-only">Close modal</span>
    </button>
  </div>
  <footer>

    <Footer />
  </footer>
</template>
<script>
import Footer from "./components/Footer.vue";
import Carrito from "./components/Carrito.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";


export default {
  setup() {
    const store = useStore();
    const totalCantidad = computed(() => store.getters.totalCantidad);

    const isOpen = ref(false);

    const toggleModal = () => {
      isOpen.value = !isOpen.value;
    };
    return {
      totalCantidad,
      isOpen,
      toggleModal,
    };
  },
  components: { Carrito, Footer },
};
</script>
