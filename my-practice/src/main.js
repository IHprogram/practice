import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyByGP4TbdVE_UkVnZP0WccmE1BQ5C-2mEg",
  authDomain: "my-practice-ffc19.firebaseapp.com",
  projectId: "my-practice-ffc19",
  storageBucket: "my-practice-ffc19.appspot.com",
  messagingSenderId: "983724786259",
  appId: "1:983724786259:web:32fa82b7260957abc6bca6",
  measurementId: "G-SNFJE98WMF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
