import Vue from "vue";

export const store = Vue.observable({
    isNavOpen: true
});

// We call toggleNav anywhere we need it in our app
export const mutations = {
    toggleNav() {
        store.isNavOpen = !store.isNavOpen
    }
};