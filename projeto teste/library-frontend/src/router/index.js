import { createRouter, createWebHistory } from 'vue-router';
import loginPage from '../views/loginPage.vue';
import Dashboard from '../views/Dashboard.vue';
import inicio from '../views/inicio.vue';
import BookList from '../views/BookList.vue';
import BookForm from '../views/BookForm.vue';
 
// ... (restante do código do router)
 
 
const routes = [
  { path: '/login',
    name:'/login',
    component: loginPage },

    {path: '/booklist', component:BookList},
     {path: '/bookform',
       component:BookForm},

  { path: '/dashboard', component: Dashboard }, // Página do dashboard
  
  { path: '/',
     component: inicio }, // Página inicial
    
];
 
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;
 
 