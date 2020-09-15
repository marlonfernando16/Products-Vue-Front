<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Produtos Front</a>
      </div>
    </nav>

    <div class="container">
      
      <ul>
        <li> {{ errors }} </li>
      </ul>
      
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
              <button @click="update(product)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>
import products from './services/products'

  import Product from './services/products'
  
  export default {

    data() {
      return {
        product: {
          id: '',
          name: '',
          quantity: '',
          price: ''
        }, 
        products: [],
        errors: ''
      }
    },
    
    mounted() {
      this.list()
    },

    methods: {

      list() {
        Product.list().then(res => {
          this.products = res.data;
        })
      },

      save() {
        if(!this.product.id) {
          Product.save(this.product).then(res => {
          this.product = {}
          alert("Save Sucessfull!")
          this.list()
          this.errors = ''
        }).catch(e => {
          this.errors = e.response.data.fieldMessage
<<<<<<< HEAD
        })
      } else {
          Product.update(this.product).then(res => {
          this.product = {}
          alert("Updated Sucessfull!")
          this.list()
          this.errors = ''
        }).catch(e => {
          this.errors = e.response.data.fieldMessage
=======
>>>>>>> a493628b47a4979ac87a1912f1b6ef3a755925ff
        })
      }
      
      },

      update(product) {
        this.product = product
      }
    }

  }

</script>

<style>

</style>
