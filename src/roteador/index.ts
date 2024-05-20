import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Tarefas from '../views/Tarefas.vue';
import ProjetosTraker from '../views/ProjetosTraker.vue';
import FormularioTraker from '../views/Projetos/FormularioTraker.vue'

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: 'tarefas',
    component: Tarefas
  },
  {
    path: "/projetosTraker",
    component: ProjetosTraker,
    children: [
      {
        path: '',
        name: 'ProjetosTraker',
        component: ProjetosTraker
      },
      {
        path: '/novo',
        name: 'Novo Projto',
        component: FormularioTraker
      },
      {
        path: '/:id',
        name: 'Editar Projto',
        component: FormularioTraker,
        props: true
      },
    ]
  }
  
]

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})

export default roteador;
