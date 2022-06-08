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
      storageService.savePet(pet)
    },
    updatePetPoints(state, { points }){
      state.pet.points += points
      storageService.savePet(state.pet)
    },
    updatePetCurrTest(state){
      state.pet.currTest++
      storageService.savePet(state.pet)
    },
  },
  actions: {},
  modules: {},
});
