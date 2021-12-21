import { createStore } from 'vuex'

const url = 'https://icanhazdadjoke.com/'
const headers = {Accept: "application/json"}

//
export default createStore({
  state: {
    count: 0,
    currentJokes: "This is a joke",
    allJokes: [],
    loading: false,
  },
  mutations: {
    //syncronous
    increment(state){
      state.count++;
    },
    decrementCount(state){
      state.count--;
    },

    setCurrentJokes(state,payload){
      state.loading = true
      console.log(state.loading);
      setTimeout(()=>{

        state.currentJokes = payload
        state.allJokes.push(payload)
        state.loading = false
        console.log(state.loading);
      },1000)
    }

  },
  actions: {
    //asyncronous
    async setCurrentJokes(state,payload){
     
      const res = await fetch(url,{headers})
      const joke = await res.json()
      console.log(joke);
       
      state.commit('setCurrentJokes',joke.joke)
     
    }
  },
  modules: {
  },
  getters:{
    getCount(state){
      return state.count;
    },
    getCurrentJoke: state => state.currentJokes,
    getLoading: state => state.loading,
    getAllJokes: state => state.allJokes,
  }
})
