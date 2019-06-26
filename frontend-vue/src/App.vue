<template>
  <div id="app">
    <table class="table">
      <tr>
        <th>ID</th>
        <th>Equipamento</th>
        <th>Descrição</th>
      </tr>
      <tr v-for="chamado in chamados" :key="chamado.id">
        <td>{{chamado.id}}</td>
        <td>{{chamado.equipamento}}</td>
        <td>{{chamado.descricao}}</td>
      </tr>
    </table>
    <br />
    <form @submit.prevent="salvar">
      Equipamento: <input v-model="chamado.equipamento" type="text" />
      Descricao: <input v-model="chamado.descricao" type="text" />
      <button type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data: () => ({
    chamados: [],
    chamado: {
      equipamento: '',
      descricao: ''
    }
  }),
  created() {
    fetch('http://localhost:8000/chamados')
        .then(response => response.json())
        .then(chamados => this.chamados = chamados)
  },
  methods: {
    salvar() {
      const headers = new Headers();
      headers.set('Content-type', 'application/json')
      fetch('http://localhost:8000/chamados', { 
            method: 'POST',
            headers: headers,
            mode: 'cors',
            body: JSON.stringify(this.chamado)  
          })
          .then(response => response.json())
          .then(chamado => this.chamados.push(chamado))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
