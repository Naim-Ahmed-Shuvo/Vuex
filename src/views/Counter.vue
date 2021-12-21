<template lang="">
   <div class="home bg-gray-100 w-4/6 mx-auto py-5">
    <img alt="Vue logo" src="../assets/logo.png" class=" mx-auto">
    <button @click="decrementCount" class=" bg-red-500 text-white px-4 py-1 block mx-auto rounded mt-5 inline-block"> - </button> <span class="p-6">{{count}}</span> <button @click="incrementCount" class=" bg-green-500 text-white px-4 py-1 block mx-auto rounded mt-5 inline-block"> + </button>
  </div>
</template>
<script>
export default {
  
  methods:{
    incrementCount(){
      console.log("ok");
      this.$store.commit('increment')
    },
    decrementCount(){
      console.log("ok");
      this.$store.commit('decrementCount')
    }
  },
  computed:{
    count(){
      return this.$store.getters.getCount
    }
  }
}
</script>
<style>
    
</style>