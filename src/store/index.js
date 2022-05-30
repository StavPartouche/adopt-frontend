import Vue from "vue";
import Vuex from "vuex";

import { storageService } from '@/services/storage.service'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pet: null
  },
  getters: {
    pet(state){
      return state.pet
    }
  },
  mutations: {
    updatePet(state, { pet }){
      state.pet = pet
      storageService.save('data', state.pet)
      console.log(state.pet);
    },
    updatePetPoints(state){
      state.pet.points += 5
      storageService.save('data', state.pet)
    },
    updatePetCurrTest(state){
      state.pet.currTest++
      storageService.save('data', state.pet)
    },
  },
  actions: {},
  modules: {},
});
