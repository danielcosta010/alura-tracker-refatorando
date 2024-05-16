<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="">
    </h1>
    <button class="button" @click="alterarTema">
      {{ textoBotao }}
    </button>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

  export default defineComponent({
    name: "BarraLateral",
    emits: ['mudouTema'],
    data() {
      return {
        modoEscuroAtivo: false
      }
    },
    computed: {
      textoBotao() {
        // if(this.modoEscuroAtivo) {
        //   return 'Desativar modo escuro'
        // }
        // return 'Ativar modo escuro'

        return this.modoEscuroAtivo ? 'Desativar modo escuro' : 'Ativar modo escuro'

      }
    },
    methods: {
      alterarTema() {
        this.modoEscuroAtivo = !this.modoEscuroAtivo
        this.$emit('mudouTema', this.modoEscuroAtivo)
      }
    }
  })
</script>

<style escoped>
  header{
    padding: 1rem;
    background-color: rgb(55, 55, 93);
    width: 100%;
    height: 100vh;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    header{
      padding: 2.5rem;
      height: auto;
    }
  }
</style>