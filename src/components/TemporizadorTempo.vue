<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroTempo :contador="contador" />

    <BotaoPlayStop @clicado="iniciar" texto="Play" icone="fas fa-play" :desabilitado="cronometroRodando"/>

    <BotaoPlayStop @clicado="pausar" texto="Stop" icone="fas fa-stop" :desabilitado="!cronometroRodando"/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroTempo from './CronometroTempo.vue'
import BotaoPlayStop from "./BotaoPlayStop.vue";

export default defineComponent({
  name: 'TemporizadorTempo',
  emits: ['aoTemporizadorFinalizado'],
  data() {
    return {
      contador: 0,
      stopContador: 0,
      cronometroRodando: false
    }
  },
  components: {
    CronometroTempo,
    BotaoPlayStop
  },
  methods: {
    iniciar() {
      this.cronometroRodando = true
      this.stopContador = setInterval(() => {
        this.contador += 1
      }, 1000)
    },
    pausar() {
      this.cronometroRodando = false
      clearInterval(this.stopContador);
      this.$emit('aoTemporizadorFinalizado', this.contador)
      this.contador = 0
    }
  }

})
</script>