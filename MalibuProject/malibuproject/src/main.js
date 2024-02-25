import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtydt-0e7mWjp03TD3ESXLOU5COfGKg_A",
  authDomain: "malibu-9a921.firebaseapp.com",
  projectId: "malibu-9a921",
  storageBucket: "malibu-9a921.appspot.com",
  messagingSenderId: "110895990759",
  appId: "1:110895990759:web:2b435713ea32c1a88b5f42",
  measurementId: "G-83X8SF99GY"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
