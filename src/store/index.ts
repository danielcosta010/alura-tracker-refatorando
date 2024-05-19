import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";

interface Estado {
  projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    projetos: []
  },
  mutations: {
    'ADICIONA_PROJETO'(state, nomeDoProjeto) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      } as IProjeto
      state.projetos.push(projeto)
    }
  }
})

export default function useStore() : Store<Estado> {
  return vuexUseStore(key)
}