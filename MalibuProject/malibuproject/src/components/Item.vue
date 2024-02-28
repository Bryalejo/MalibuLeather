<template>
    <div class="inline-flex justify-center items-center">
        <div class="grid grid-col-2 truncate">
            <div>

                <img :src="item.URLimage" :alt="`imagen-${item.title}`" class="w-32">
            </div>
            <div class="inline-flex gap-5 " >
                <span class="max-w-lg">{{ item.title }}</span>
                <span>S/{{ item.price *item.cantidad }}.00</span>
                <button class="bg-slate-900 text-xl text-yellow-500 px-2 rounded-lg" @click="disminuir(item.id)">
                    -
                </button>
                <span class="">{{ item.cantidad }}</span>
                <button type="button" class="bg-slate-900 text-xl text-yellow-500 px-2 rounded-lg" @click="aumentar(item.id)">
                    +
                </button>
            </div>
        </div>
        
    </div>
   
</template>

<script >
import { useStore } from 'vuex';
export default {
 props: ['item'],
 setup(){
    const store = useStore()
    const aumentar = id => {
        store.commit('aumentar',id)
    }
    const disminuir = id =>{
        store.commit('disminuir',id)
    }
    return{aumentar,disminuir}
 }
}
</script>

