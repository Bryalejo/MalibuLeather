<template>
    <div class="grid grid-cols-2 gap-8">

        <div class="flex flex-col items-center justify-center px-6 py-8 mt-36 mb-36 mx-auto md:h-screen lg:py-0">
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Informacion de pago
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="realizarPago">
                        <div>
                            <label for="apellido"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos</label>
                            <input type="text" name="apellido" id="apellido"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="" />
                        </div>

                        <div>
                            <label for="nombre"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres</label>
                            <input type="text" name="nombre" id="nombre"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="" v-model="nombre" />
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-900">Direccion</label>
                            <input type="text" class="border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full" />
                        </div>
                        <div class="flex space-x-2">
                            <div class="flex flex-col">
                                <label class="text-sm font-medium text-gray-900">Departamento</label>
                                <select class="border border-gray-300 text-gray-900 sm:text-sm rounded-lg px-4">
                                    <option selected disabled>Seleccionar</option>

                                    <option value="amazonas">Amazonas</option>
                                    <option value="ancash">Áncash</option>
                                    <option value="apurimac">Apurímac</option>
                                    <option value="arequipa">Arequipa</option>
                                    <option value="ayacucho">Ayacucho</option>
                                    <option value="cajamarca">Cajamarca</option>
                                    <option value="callao">Callao</option>
                                    <option value="cusco">Cusco</option>
                                    <option value="huancavelica">Huancavelica</option>
                                    <option value="huanuco">Huánuco</option>
                                    <option value="ica">Ica</option>
                                    <option value="junin">Junín</option>
                                    <option value="la-libertad">La Libertad</option>
                                    <option value="lambayeque">Lambayeque</option>
                                    <option value="lima">Lima</option>
                                    <option value="loreto">Loreto</option>
                                    <option value="madre-de-dios">Madre de Dios</option>
                                    <option value="moquegua">Moquegua</option>
                                    <option value="pasco">Pasco</option>
                                    <option value="piura">Piura</option>
                                    <option value="puno">Puno</option>
                                    <option value="san-martin">San Martín</option>
                                    <option value="tacna">Tacna</option>
                                    <option value="tumbes">Tumbes</option>
                                    <option value="ucayali">Ucayali</option>
                                </select>
                            </div>
                            <div class="flex flex-col">
                                <label class="text-sm font-medium text-gray-900">Provincia</label>
                                <select type="text" class="border border-gray-300 text-gray-900 sm:text-sm rounded-lg px-4">
                                    <option selected disabled>Seleccionar</option>
                                    <option value="barranca">Barranca</option>
                                    <option>Lima</option>
                                    <option value="cajatambo">Cajatambo</option>
                                    <option value="cañete">Cañete</option>
                                    <option value="canta">Canta</option>
                                    <option value="huaral">Huaral</option>
                                    <option value="huaura">Huaura</option>
                                </select>
                            </div>
                            <div class="flex flex-col">
                                <label class="text-sm font-medium text-gray-900">Distrito</label>
                                <select type="text" class="border border-gray-300 text-gray-900 sm:text-sm rounded-lg px-4">
                                    <option selected disabled>Seleccionar</option>
                                    <option value="miraflores">Miraflores</option>
                                    <option value="san-isidro">San Isidro</option>
                                    <option value="san-borja">San Borja</option>
                                    <option value="jesus-maria">Jesús María</option>
                                    <option value="magdalena-del-mar">Magdalena del Mar</option>
                                    <option value="san-miguel">San Miguel</option>
                                    <option value="surquillo">Surquillo</option>
                                    <option value="barranco">Barranco</option>
                                    <option value="la-victoria">La Victoria</option>
                                    <option value="breña">Breña</option>
                                    <option value="pueblo-libre">Pueblo Libre</option>
                                    <option value="rimac">Rímac</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu
                                correo electrónico</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label for="telefono"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero de
                                telefono</label>
                            <input type="tel" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="" />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Metodo de Pago
                            </label>
                            <select type="text" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="">
                                <option value="">Tarjeta de Crédito</option>
                                <option value="">Tarjeta de Débito</option>
                            </select>
                        </div>
                        <div>
                            <label for="telefono"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de la
                                tarjeta</label>
                            <input type="tel" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="" />
                        </div>
                        <div>
                            <label for="telefono"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero de
                                tarjeta</label>
                            <input type="tel" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="" />
                        </div>
                        <div class="flex space-x-2">
                            <div class="flex flex-col">
                                <label for="telefono"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de
                                    expiracion</label>
                                <input type="tel" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="DD/YY" required="" />
                            </div>
                            <div class="flex flex-col">
                                <label for="telefono"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CVV</label>
                                <input type="tel" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" />
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required="" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">Acepto los
                                    <a class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        href="#">Terminos y Condiciones</a></label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        <div class="mt-32 flex w-1/4 h-1/5 bg-slate-200">
            <div class="flex flex-col ml-4">
                <div>
                    <h2 class="text-2xl font-semibold">Totales:</h2>
                </div>
                <div class="flex">
                    <div class="text-gray-400">
                        Sub-total: &nbsp;
                        <span class="font-semibold text-black">S/{{ totalCantidad * totalPrecio }}.00</span>
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
                <button type="submit" @click="realizarPago" class="mt-4 bg-orange-400 text-white px-12 py-2 hover:bg-amber-500">
                    Completar Pago
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
            router.push({ name: 'home' });
            alert('Su pedido se realizo exitosamente')
        };
        return { items, totalCantidad, totalPrecio, vaciar, realizarPago };
    },
};
</script>
