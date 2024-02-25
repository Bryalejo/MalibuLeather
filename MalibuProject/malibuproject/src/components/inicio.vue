
<script setup>

import Footer from "./Footer.vue";

import { FwbCarousel } from 'flowbite-vue'

const picturesH = [
  {
    'src': '/imgs/bill1.jpg',
    'alt': 'Picture 1',
  },
  {
    'src': '/imgs/bill2.jpg',
    'alt': 'Picture 2',
  },
  {
    'src': '/imgs/correa.jpg',
    'alt': 'Picture 3',
  },

]
const picturesM = [
  {
    'src': '/imgs/cartera1.jpg',
    'alt': 'Picture 1',
  },
  {
    'src': '/imgs/cartera2.jpg',
    'alt': 'Picture 2',
  },
  {
    'src': '/imgs/cartera3.jpg',
    'alt': 'Picture 3',
  },
]
const components={
  Footer
};
defineExpose({components})
</script>
<template>
 
  <div class=" flex justify-center my-32 w-full items-center" >
    <div class=" container grid grid-cols-1 sm:grid-cols-2 gap-10 ">
      <div class="col-span-1 font-serif">
        <div class="sm:text-center">
          <h2 class=" font-bold text-3xl">HOMBRE</h2>
          <p class="mt-4 text-sm sm:text-xl  sm:w-auto w-40 text-justify ">
            Nuestras articulos de cuero para hombres son la mezcla perfecta de estilo y funcionalidad. Están confeccionadas con cuero genuino de alta calidad, lo que les confiere una durabilidad excepcional. Estas carteras están diseñadas para mantener tus tarjetas, billetes y documentos organizados, sin sacrificar la elegancia. Ya sea que prefieras un diseño clásico o contemporáneo, encontrarás una cartera que se adapte a tu estilo.
          </p>
        </div>
        <a href="/hombre" class="rounded-md bg-gray-900 text-white px-2 sm:px-6 py-1  hover:border-2 hover:bg-yellow-500 hover:text-gray-900  cursor-pointer">Ver más</a>
      </div>
      <div class="col-span-1 z-0 sm:w-full w-40 object-contain">
        <FwbCarousel :pictures="picturesH"></FwbCarousel>
      </div>
    </div>
  </div>
  <div class="flex justify-center my-40 w-full ">
    <div class="container grid grid-cols-1 sm:grid-cols-2 justify-between gap-10">
      <div class="col-span-1 z-0 sm:w-full w-40 object-contain">
        <FwbCarousel :pictures="picturesM"></FwbCarousel>
      </div>
      <div class="col-span-1 font-serif ">
        <div class="text-center">
          <h2 class=" font-bold text-3xl">MUJER</h2>
          <p class="mt-4 text-sm sm:text-xl  sm:w-auto w-40 text-justify ">
            Nuestra colección de articulos de cuero para mujeres es una fusión perfecta de moda y funcionalidad. Cada bolso está confeccionado con cuero genuino de alta calidad y viene en una variedad de estilos, desde bolsos cruzados hasta totes elegantes. Estos bolsos no solo son una declaración de estilo, sino también una inversión en calidad y durabilidad.
          </p>
        </div>
        <a href="/mujer" class="rounded-md bg-gray-900 text-white px-2 sm:px-6 py-1 hover:border-2 hover:bg-yellow-500 hover:text-gray-900  cursor-pointer">Ver más</a>

      </div>
      
    </div>
  </div>
  <div class="relative flex items-center justify-center py-10 sm:py-20">
  <img src="/imgs/conoce.png" alt="" class="brightness-90 h-96 sm:h-auto sm:w-full w-96">
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center p-4 sm:p-0">
    <p class="  text-white font-bold sm:w-3/4 md:w-5/6 md:text-2xl w-40 font-serif sm:text-4xl text-sm">
      CONOCE COMO HACEMOS NUESTROS PRODUCTOS <br>
      <span class="text-sm sm:text-xl font-normal">Nuestro proceso de elaboración comienza con la selección cuidadosa de cuero de la más alta calidad, asegurando que cada pieza sea única y resistente. Nuestros hábiles artesanos, con un profundo conocimiento de las técnicas tradicionales y modernas, dan vida a cada diseño con precisión y dedicación.</span>
    </p>
    
  </div>
</div>


 
</template>


