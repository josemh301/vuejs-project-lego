<template>
  <div id="app">
    <nav class="navbar navbar-light sticky-top mr-3">
      <div v-if="cart.length" class="w-100 navbar-text ml-auto d-flex justify-content-end position-relative">
        <div class="mr-auto d-flex align-items-end flex-column bd-highlight mb-3 position-absolute">
          <div class="mb-2">
            <span class="font-weight-bold bg-white">{{ currency(cartTotal) }}</span>
            <button @click="displayCart = !displayCart" class="btn btn-success btn-sm ml-3" id="cartDropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-shopping-cart mr-1"></i> {{ cart.length }}
            </button>
          </div>
          <div v-if="displayCart" class="list-group" aria-labelledby="cartDropdown">
            <div v-for="(item, index) in cart" :key="index" class="list-group-item d-flex justify-content-between">
              <div>{{ item.name }}</div>
              <div class="ml-3 font-weight-bold">{{ currency(item.price) }}</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="container">
      <h1>{{ title }}</h1>
      <h4>{{ subtitle }}</h4>
      <hr>
      <br>
      <label for="max-price" class="form-label h5">Max Price (${{ max }})</label>
      <div class="badge bg-success ml-3">results: {{ filteredProducts.length }}</div>
      <input v-model.number="max" type="range" class="form-range" min="35" max="700">
      <div class="mb-3">
        <label class="form-label h6">Filter by Collection</label>
        <div>
          <button v-for="collection in collections" :key="collection"
                  :class="{'btn-primary': selectedCollections.includes(collection), 'btn-secondary': !selectedCollections.includes(collection)}"
                  class="btn m-1"
                  @click="toggleCollection(collection)">
            {{ collection }}
          </button>
        </div>
      </div>
      <div v-for="item in filteredProducts" :key="item.id" id="item-list" class="row align-items-center">
        <div class="col-1 m-auto">
          <button @click="addToCart(item)" class="btn btn-success">+</button>
        </div>
        <div class="col-sm-4">
          <img class="img-fluid d-block" :src="item.image" :alt="item.name">
        </div>
        <div class="col">
          <h3 class="text-primary">{{ item.name }}</h3>
          <p class="mb-0">{{ item.description }}</p>
          <div class="h5 float-right">{{ currency(item.price) }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import products from './products.js';

export default {
  name: 'App',
  data() {
    return {
      title: 'Lego project',
      subtitle: "Lego Marketplace",
      displayLabels: true,
      selectedCollections: [],
      collections: ['Icons', 'LEGO® Ideas', 'None'],
      max: 50,
      min: 5, 
      products: products, // Use the imported products array
      cart: []
    }
  },
  methods: {
    toggleCollection(collection) {
      const index = this.selectedCollections.indexOf(collection);
      if (index > -1) {
        this.selectedCollections.splice(index, 1);
      } else {
        this.selectedCollections.push(collection);
      }
    },
    currency(value) {
      return '$' + Number.parseFloat(value).toFixed(2);
    },
    addToCart(product) {
      this.cart.push(product);
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(item => {
        const isWithinPriceRange = item.price <= this.max;
        const matchesCollection = this.selectedCollections.length === 0 || this.selectedCollections.includes(item.collection);
        return isWithinPriceRange && matchesCollection;
      });
    },
    cartTotal() {
      return this.cart.reduce((total, item) => total + Number(item.price), 0);
    }
  }
}
</script>


