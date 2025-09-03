<template>
  <div class="pb-5">
    <div v-if="state.loadingProducts" class="alert alert-info">
      Cargando productos...
    </div>
    <div v-else-if="state.productsError" class="alert alert-danger">
      {{ state.productsError }}
    </div>
    <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
      <div v-for="p in filtered" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { actions, state } from "../state";
import ProductCard from "./ProductCard.vue";

onMounted(() => actions.loadProducts());

const filtered = computed(() =>
  state.products.filter((p) =>
    p.name.toLowerCase().includes(state.search.toLowerCase())
  )
);
</script>
