<template>
  <div class="home bg-gray-100 w-4/6 border-1 text-green-600 mx-auto py-7">
        <img v-show="loading" src="../assets/Pinwheel.gif" alt="loading..." class="mx-auto">
       <p v-show="!loading">{{getCurrentJoke}}</p>
      <button class=" bg-green-500 text-white px-4 py-1 block mx-auto rounded mt-5" @click="addRandomJoke">{{loading?'PLease Wait.. ':'Add A Joke'}}</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  
  methods:{
    addRandomJoke(){
      // console.log("ok");
      this.$store.dispatch('setCurrentJokes')
    },
   
  },
  computed:{
    getCurrentJoke(){
      return this.$store.getters.getCurrentJoke
    },
    loading(){
       return this.$store.getters.getLoading
    }
  }
}
</script>
