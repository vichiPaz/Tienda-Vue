<!-- src/App.vue -->
<template>
  <div class="app-root d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <nav class="navbar custom-navbar px-3">
      <span class="navbar-brand text-light">Tienda Fashion</span>

      <!-- Barra derecha (autenticación) -->
      <div v-if="state.user" class="d-flex align-items-center gap-3">
        <!-- Navegación principal (solo logueado) -->
        <div class="btn-group me-2" role="group" aria-label="Navegación tienda">
          <button
            class="btn btn-outline-light btn-sm"
            :class="{ active: state.view === 'home' }"
            @click="actions.go('home')"
          >
            Productos
          </button>
          <button
            class="btn btn-outline-light btn-sm position-relative"
            :class="{ active: state.view === 'cart' }"
            @click="actions.go('cart')"
          >
            Carrito
            <span
              v-if="cartCount > 0"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
            >
              {{ cartCount }}
            </span>
          </button>
        </div>

        <span class="text-light small">
          Hola, <strong>{{ state.user.name || state.user.email }}</strong>
        </span>
        <button class="btn btn-outline-light btn-sm" @click="actions.logout()">
          Cerrar sesión
        </button>
      </div>

      <div v-else class="d-flex gap-2">
        <button class="btn btn-outline-light btn-sm" @click="goLogin">
          Iniciar sesión
        </button>
        <button class="btn btn-primary btn-sm" @click="goRegister">
          Crear cuenta
        </button>
      </div>
    </nav>

    <!-- Contenido -->
    <div class="container py-4 flex-grow-1">
      <!-- Si NO hay usuario => Auth -->
      <div v-if="!state.user" class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-5">
          <LoginForm
            v-if="authView === 'login'"
            @switch-to-register="authView = 'register'"
          />
          <RegisterForm v-else @switch-to-login="authView = 'login'" />
        </div>
      </div>

      <!-- Si hay usuario => App -->
      <template v-else>
        <!-- Buscador solo en vista de productos -->
        <div v-if="state.view === 'home'" class="row mb-3 pt-3">
          <div class="col-12 col-md-6 col-lg-4">
            <SearchBox
              v-model="state.search"
              placeholder="Buscar productos..."
            />
          </div>
        </div>

        <main>
          <!-- Productos -->
          <section v-if="state.view === 'home'">
            <ProductList />
          </section>

          <!-- Carrito -->
          <section v-else-if="state.view === 'cart'">
            <CartTable />
          </section>

          <!-- Fallback (por si agregas más vistas) -->
          <section v-else>
            <p class="text-muted">Vista no disponible.</p>
          </section>
        </main>
      </template>
    </div>

    <!-- Footer siempre visible -->
    <Footer />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { actions, state } from "./state";

import CartTable from "./components/CartTable.vue";
import Footer from "./components/Footer.vue";
import LoginForm from "./components/LoginForm.vue";
import ProductList from "./components/ProductList.vue";
import RegisterForm from "./components/RegisterForm.vue";
import SearchBox from "./components/SearchBox.vue";

const authView = ref(state.view === "register" ? "register" : "login");

function goLogin() {
  authView.value = "login";
  actions.go("login");
}

function goRegister() {
  authView.value = "register";
  actions.go("register");
}

const cartCount = computed(() =>
  state.items.reduce((a, it) => a + (Number(it.qty) || 0), 0)
);
</script>

<style>
body {
  background: #0f172a;
  color: #e5e7eb;
}

.custom-navbar {
  background: #0f172a;
  color: #e5e7eb;
}
.card {
  background: #111827;
  border-color: #1f2937;
  color: #e5e7eb;
}
.form-control,
.btn {
  border-radius: 10px;
}
.navbar {
  border-bottom: 1px solid #1f2937;
}
a {
  color: #60a5fa;
}
a:hover {
  color: #93c5fd;
}

.app-root {
  background: #0f172a;
}
.badge {
  font-size: 0.7rem;
}
</style>
