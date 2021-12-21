<template>
  <div class="home bg-gray-100 w-4/6 border-1 text-green-600 mx-auto py-7">
       <p v-if="allJokes.length==0">
         No Jokes Available... PLease Add Some... !!
       </p>
      <p class=" bg-gray-50 py-2 px-2 text-gray-800 text-sm rounded  border-l-2 w-2/6 mx-auto my-4" v-for="(joke,idx) in allJokes" :key="joke">{{idx+1}}. {{joke}}</p>
      <router-link :to='{name: "joke"}'>

        <button class=" bg-green-500 text-white px-4 py-1 block mx-auto rounded mt-5">Add A Joke</button>
      </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

//
 export default {
   name: "AllJokes",
   computed:{
     ...mapGetters({allJokes: 'getAllJokes'})
    //  allJokes(){
    //    return this.$store.getters.getAllJokes
    //  }
   }
 }
</script>
