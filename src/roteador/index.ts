import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Tarefas from '../views/Tarefas.vue';
import ProjetosTraker from '../views/ProjetosTraker.vue'

const rotas: RouteRecordRaw[] = [{
  path: "/",
  name: 'tarefas',
  component: Tarefas
},
{
  path: '/projetosTraker',
  name: 'ProjetosTraker',
  component: ProjetosTraker
}];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})

export default roteador;
