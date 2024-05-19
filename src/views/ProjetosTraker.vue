<template>
  <section class="projetos">
    <section>
      <h1 class="title">Projetos</h1>

      <form action="" @submit.prevent="salvar">
        <div class="field">
          <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
          <input type="text" id="nomeDoProjeto" v-model="nomeDoProjeto" class="input"
            placeholder="Digite o nome do projeto">
        </div>
        <div class="field">
          <button class="button" type="submit">Salvar</button>
        </div>
      </form>

      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="projeto in projetos" :key="projeto.id">
            <td>{{ projeto.id }}</td>
            <td>{{ projeto.nome }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>

</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import useStore from '../store/index'

export default defineComponent({
  name: 'projetosTraker',
  data() {
    return {
      nomeDoProjeto: '',
      
    }
  },
  methods: {
    salvar() {
      this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
      this.nomeDoProjeto = ''
    }
  },
  setup() {
    const store = useStore()
    return {
      store,
      projetos: computed(() => store.state.projetos)
    }
  }
})
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>