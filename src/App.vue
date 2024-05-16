<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @mudouTema="trocaTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <FormCount @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <TarefaConcluida v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <BoxVazio v-if="listaVazia">
          Você ainda não realizou nenhuma tarefa.
        </BoxVazio>
      </div>
    </div>
  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormCount from './components/FormCount.vue';
import TarefaConcluida from './components/TarefaConcluida.vue';
import ITarefa from './interfaces/ITarefa';
import BoxVazio from './components/BoxVazio.vue';


export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormCount,
    TarefaConcluida,
    BoxVazio
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
    trocaTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

/* main {
  --bg-primario: #fff;
  --texto-primario: #000;
} */
.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
