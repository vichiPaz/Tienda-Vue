# Tienda-Vue

Una aplicación de comercio electrónico simple construida con Vue.js que permite a los usuarios buscar productos, agregarlos a un carrito de compras y simular una compra. También incluye autenticación de usuario.

## Características

- **Catálogo de Productos:** Visualiza una lista de productos en la página de inicio.
- **Búsqueda:** Busca productos por nombre.
- **Carrito de Compras:**
  - Añade productos al carrito especificando la cantidad.
  - Visualiza el contenido del carrito.
  - Elimina productos del carrito.
  - Vacía el carrito.
  - Simula una compra de los productos en el carrito.
- **Autenticación de Usuario:**
  - Inicio de sesión con correo y contraseña.
  - Enlace a la página de login visible para usuarios no autenticados.
  - Funcionalidad para cerrar sesión.

## Requisitos Técnicos

- La lista de productos se consume desde un módulo de JavaScript que simula una API, con respuestas asíncronas a través de promesas.
- La autenticación simula una API REST. `Auth.login(creds)` retorna una promesa que se resuelve con un objeto `User` o lanza un error.

## Instalación y Ejecución

1.  **Clonar el repositorio:**

    ```bash
    git clone <URL-DEL-REPOSITORIO>
    cd Tienda-Vue
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en la URL que se muestre en la terminal (generalmente `http://localhost:5173`).

## Uso

Para iniciar sesión y probar la funcionalidad de usuario autenticado, puedes usar las siguientes credenciales de prueba:

- **Email:** `usuario1@mitienda.com`
- **Contraseña:** `password`

## Equipo 1 - Bootcamp FrontEnd UNAB

- Franco Giaverini
- Christopher Guala
- Isabel Palacios
- Valentina Troncoso
