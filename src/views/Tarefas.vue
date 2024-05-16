<template>
  <FormCount @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <TarefaConcluida v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    <BoxVazio v-if="listaVazia">
      Você ainda não realizou nenhuma tarefa.
    </BoxVazio>
  </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormCount from '../components/FormCount.vue';
import TarefaConcluida from '../components/TarefaConcluida.vue';
import ITarefa from '../interfaces/ITarefa';
import BoxVazio from '../components/BoxVazio.vue';


export default defineComponent({
  name: 'App',
  components: {
    FormCount,
    TarefaConcluida,
    BoxVazio
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
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
    }
  }
});
</script>
