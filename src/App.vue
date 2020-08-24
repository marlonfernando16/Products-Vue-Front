<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Produtos Front</a>
      </div>
    </nav>

    <div class="container">
      <form @submit.prevent="save">

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="product.name">
          <label>Quantidade</label>
          <input type="number" placeholder="QTD" v-model="product.quantity">
          <label>Valor</label>
          <input type="text" placeholder="Valor" v-model="product.price">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="product of products" :key="product.id">

            <td>{{ product.name }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

  import Product from './services/products'
  
  export default {

    data() {
      return {
        product: {
          name: '',
          quantity: '',
          price: ''
        }, 
        products: []
      }
    },
    
    mounted() {
      Product.list().then(res => {
        this.products = res.data;
      })
    },

    methods: {
      save() {
        Product.save(this.product).then(res => {
        alert("Save Sucessfull!")
        })
      }
    }

  }

</script>

<style>

</style>
