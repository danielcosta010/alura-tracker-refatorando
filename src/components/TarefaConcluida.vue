<template>
  <BoxVazio>
    <div class="columns">
      <div class="column is-4">
        {{ tarefa.descricao || 'Tarefa sem descrição' }}
      </div>
      <div class="column is-3">
        {{ tarefa.projeto?.nome || 'N/D' }}
      </div>
      <div>
          <CronometroTempo :contador="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </BoxVazio>

</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import CronometroTempo from './CronometroTempo.vue';
import ITarefa from '../interfaces/ITarefa';
import BoxVazio from './BoxVazio.vue';

export default defineComponent({
  name: 'TarefaConcluida',
  components: {
    CronometroTempo,
    BoxVazio
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  }
})
</script>