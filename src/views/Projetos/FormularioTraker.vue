<template>
  <section>
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
  </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store'
import { ALTERA_PROJETO, ADICIONA_PROJETO } from '@/store/tipos-de-mutacoes';
import { TipoNotificacao } from '@/interfaces/INotificacao';
import useNotificador from '@/hooks/notificador'


export default defineComponent({
  name: 'FormularioTraker',
  props: {
    id: {
      type: String,
    }
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
      this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  data() {
    return {
      nomeDoProjeto: '',
    }
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto
        })
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
      }
      this.nomeDoProjeto = ''
      this.notificar(TipoNotificacao.SUCESSO, 'Tudo certo!', 'Projeto adicionado com sucesso')
      this.$router.push('/projetosTraker')
    }
    
  },
  setup() {
    const store = useStore()
    const { notificar } = useNotificador()
    return {
      store,
      notificar
    }
  }
})
</script>
