<!-- src/components/RegisterForm.vue -->
<template>
  <div class="card">
    <div class="card-body">
      <h1 class="h5 mb-3">Crear cuenta</h1>
      <form @submit.prevent="onSubmit" class="vstack gap-3">
        <div>
          <label class="form-label">Nombre</label>
          <input v-model="name" type="text" class="form-control" placeholder="Tu nombre" />
        </div>
        <div>
          <label class="form-label">Correo</label>
          <input v-model="email" type="email" class="form-control" required placeholder="tucorreo@ejemplo.com" />
        </div>
        <div>
          <label class="form-label">Contraseña</label>
          <input v-model="password" type="password" class="form-control" required placeholder="••••••••" />
        </div>

        <div v-if="state.authError" class="alert alert-danger" v-text="state.authError"></div>

        <button class="btn btn-success" :disabled="state.authLoading">
          <span v-if="state.authLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
          Registrarme
        </button>

        <p class="mt-3 mb-0 text-muted">
          ¿Ya tienes cuenta?
          <a href="#" @click.prevent="$emit('switch-to-login')">Inicia sesión</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { actions, state } from "../state";

const name = ref("");
const email = ref("");
const password = ref("");

async function onSubmit() {
  try {
    await actions.register({ name: name.value, email: email.value, password: password.value });
  } catch (e) {}
}
</script>
