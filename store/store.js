import Vue from "vue";

export const store = Vue.observable({
  // Is sidebar open
  isNavOpen: false
});

export const mutations = {
  // We call toggleNav to open sidebar
  toggleNav() {
      store.isNavOpen = !store.isNavOpen
  }
};