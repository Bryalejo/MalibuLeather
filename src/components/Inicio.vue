
<script setup>
import Footer from "./Footer.vue";
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink , Carousel} from "flowbite-vue";
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

</script>
<template>
  <Navbar class="sticky top-0 z-10">
    <template #logo>
      <NavbarLogo
        link="https://www.google.com/"
        alt="Malibu logo"
        image-url="/imgs/Logo.png"
      >
      <h1>
        <span class="font-serif font-light text-4xl">alibú</span>
        
      </h1>
      
      </NavbarLogo>
    </template>
    <template #default="{ isShowMenu }">
      <NavbarCollapse :isShowMenu="isShowMenu" class="">
        <NavbarLink isActive link="#"
          ><span class="text-xl">Home</span></NavbarLink
        >
        <NavbarLink link="#"><span class="text-xl">Hombre</span></NavbarLink>
        <NavbarLink link="#"><span class="text-xl">Mujer</span></NavbarLink>
        <NavbarLink link="#"><span class="text-xl">Catalogo</span></NavbarLink>
        <NavbarLink link="#"
          ><span class="text-xl">Contáctanos</span></NavbarLink
        >
        <NavbarLink>
          <img src="/imgs/Comprar.svg" alt="" />
        </NavbarLink>
        <NavbarLink>
          <img src="/imgs/Perfil.svg" alt="" />
        </NavbarLink>
      </NavbarCollapse>
    </template>
  </Navbar>
  <div class=" flex justify-center my-20">
    <div class=" container grid grid-cols-2 gap-10 ">
      <div class="col-span-1 font-serif">
        <div class="text-center">
          <h2 class="text-3xl font-bold">HOMBRE</h2>
          <p class="mt-4 text-xl text-justify">
            Nuestras articulos de cuero para hombres son la mezcla perfecta de estilo y funcionalidad. Están confeccionadas con cuero genuino de alta calidad, lo que les confiere una durabilidad excepcional. Estas carteras están diseñadas para mantener tus tarjetas, billetes y documentos organizados, sin sacrificar la elegancia. Ya sea que prefieras un diseño clásico o contemporáneo, encontrarás una cartera que se adapte a tu estilo.
          </p>
        </div>
        <button class="rounded-md bg-slate-950 text-white px-6 py-1 hover:bg-slate-800 hover:border-2 hover:border-yellow-600  ">Ver más</button>
      </div>
      <div class="col-span-1 z-0">
        <Carousel :pictures="picturesH"></Carousel>
      </div>
    </div>
  </div>
  <div class="flex justify-center my-40 ">
    <div class="container grid grid-cols-2 justify-between gap-10">
      <div class="col-span-1 font-serif ">
        <div class="text-center">
          <h2 class="text-3xl font-bold">MUJER</h2>
          <p class="mt-4 text-xl text-justify  ">
            Nuestra colección de articulos de cuero para mujeres es una fusión perfecta de moda y funcionalidad. Cada bolso está confeccionado con cuero genuino de alta calidad y viene en una variedad de estilos, desde bolsos cruzados hasta totes elegantes. Estos bolsos no solo son una declaración de estilo, sino también una inversión en calidad y durabilidad.
          </p>
        </div>
        <button class="rounded-md bg-slate-950 text-white px-6 py-1 hover:bg-slate-800 hover:border-2 hover:border-yellow-600  ">Ver más</button>

      </div>
      <div class="col-span-1 z-0">
        <Carousel :pictures="picturesM"></Carousel>
      </div>
    </div>
  </div>
  <div class="relative flex items-center justify-center py-20">
    <img src="/imgs/conoce.png" alt="" class="brightness-90">
    <div class="absolute inset-0 flex flex-col justify-center items-center text-center">

      <p class="max-w-2xl text-4xl text-white font-bold mx-auto font-serif">
        CONOCE COMO HACEMOS NUESTROS PRODUCTOS <br>
        <span class="text-lg font-normal">Nuestro proceso de elaboración comienza con la selección cuidadosa de cuero de la más alta calidad, asegurando que cada pieza sea única y resistente. Nuestros hábiles artesanos, con un profundo conocimiento de las técnicas tradicionales y modernas, dan vida a cada diseño con precisión y dedicación.</span>
      </p>
      <button class=" text-xl text-white border-white border-2 px-20 py-2 rounded-md hover:text-black hover:border-black">Ver Más</button>
    </div>
  </div>
  <Footer></Footer>
 
</template>


