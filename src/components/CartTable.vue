<template>
  <div>
    <div v-if="isLoading" class="text-center p-3">
      Realizando la Transacción ...
    </div>
    <div
      v-if="!isLoading && state.items.length === 0"
      class="alert alert-secondary"
    >
      Tu carrito está vacío.
    </div>
    <div v-else-if="!isLoading" class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>Producto</th>
            <th style="width: 140px">Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="it in state.items" :key="it.id">
            <td class="d-flex align-items-center gap-2">
              <img
                :src="it.image"
                alt=""
                width="48"
                height="32"
                class="rounded border"
              />
              {{ it.name }}
            </td>
            <td>
              <input
                type="number"
                min="1"
                class="form-control"
                v-model.number="it.qty"
                @change="actions.updateQty(it.id, it.qty)"
              />
            </td>
            <td>${{ it.price.toLocaleString("es-CL") }}</td>
            <td>${{ (it.price * it.qty).toLocaleString("es-CL") }}</td>
            <td>
              <button
                class="btn btn-sm btn-outline-danger"
                @click="actions.removeFromCart(it.id)"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-end gap-2">
        <div class="fs-5 fw-semibold">
          Total: ${{ total.toLocaleString("es-CL") }}
        </div>
        <button class="btn btn-outline-secondary" @click="actions.clearCart()">
          Vaciar
        </button>
        <button
          class="btn btn-success"
          :disabled="state.items.length === 0"
          @click="buyProducts"
        >
          Comprar
        </button>
      </div>
    </div>
  </div>

  <div
    v-if="showSuccessModal"
    class="modal fade show d-block custom-modal"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <he class="modal-title text-bg-light">Compra exitosa</he>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body text-bg-light">
          <p>¡Tu compra se ha realizado de manera exitosa!</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="closeModal">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { actions, state } from "../state";

const isLoading = ref(false);

const total = computed(() =>
  state.items.reduce((a, it) => a + it.price * it.qty, 0)
);

const showSuccessModal = ref(false);
async function buyProducts() {
  if (!state.items || state.items.length === 0) return;
  isLoading.value = true;
  actions.clearCart();
  await new Promise((resolve) => setTimeout(resolve, 800));
  isLoading.value = false;
  showSuccessModal.value = true;
}

function closeModal() {
  showSuccessModal.value = false;
}
</script>

<style>
.custom-modal {
  background-color: rgba(0, 0, 0, 0.4);
}

.custom-modal-dialog {
  background-color: rgb(93, 90, 110);
}
</style>
