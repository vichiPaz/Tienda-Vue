<template>
  <div class="card product-card h-100">
    <div class="img-wrapper">
      <img :src="product.image" :alt="product.name" class="product-img" />
    </div>
    <div class="card-body d-flex flex-column">
      <h2 class="h6 card-title text-truncate">{{ product.name }}</h2>
      <p class="card-text mb-3">${{ product.price.toLocaleString('es-CL') }}</p>
      <div class="mt-auto d-flex align-items-center gap-2">
        <input
          v-model.number="qty"
          type="number"
          min="1"
          class="form-control form-control-sm text-center w-25"
        />
        <button class="btn btn-primary flex-grow-1" @click="add">🛒 Agregar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { actions } from '../state'

const props = defineProps({ product: { type: Object, required: true } })
const qty = ref(1)

function add() {
  actions.addToCart(props.product, qty.value)
  qty.value = 1
}
</script>

<style scoped>

.product-card {
  border: 1px solid #e0e0e0; 
  border-radius: 1rem;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}


.img-wrapper {
  width: 100%;
  padding-top: 66.66%; 
  position: relative;
  overflow: hidden;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: #f5f5f5;
}

.product-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.img-wrapper:hover .product-img {
  transform: scale(1.05);
}


.card-title {
  font-size: 1rem;
  font-weight: 600;
}


.card-text {
  font-size: 1rem;
  font-weight: 700;
  color: #0d6efd; 
}


.btn-primary {
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
