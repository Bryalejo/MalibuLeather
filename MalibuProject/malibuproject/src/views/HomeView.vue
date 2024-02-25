<template>
  <div class="home px-20">
    
   <inicio></inicio>
  </div>
</template>

<script>
// @ is an alias to /src

import inicio from '@/components/inicio.vue';

export default {
  name: 'HomeView',
  components: {
    
    inicio,
    
  }
}
</script>
