
<template>
   <div
        class="w-28 sm:w-full h-80 sm:h-auto rounded-lg my-10 "
      >
      
          <img class="rounded-t-lg" :src="producto.URLimage" :alt=" `imagen-${producto.title}`" />
        
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-sm sm:text-2xl sm:h-auto h-20 font-bold tracking-tight text-gray-900 dark:text-white"
            >
             {{ producto.title }}
            </h5>
          </a>
          <p class="mb-3 font-bold sm:text-2xl text-xl text-blue-950"> S/{{ producto.price }}.00</p>
          
          <p class="text-black">Colores:</p>
          <p class="inline-flex">
           <img src="/imgs/elipsec.svg" alt="">
           <img src="/imgs/elipsen.svg" alt="">

          </p>
          <br />
          <div class="flex justify-center mt-4 md:mt-6">
            <button  class="max-w-xs sm:max-w-none inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-yellow-500 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="agregar(producto)">Comprar</button>
            
        </div>
        </div>
    </div>

</template>

<script >
import { useStore } from 'vuex';
export default{
    props:['producto'],
    setup(){
        const store = useStore()
        const agregar = (producto) =>{
            store.dispatch('agregarAlcarro',producto)
        }
        return {agregar}
    }
}
</script>

