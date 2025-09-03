// src/api/auth.js
const USERS_KEY = 'users';

/** Lee usuarios guardados */
function getUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  try { return raw ? JSON.parse(raw) : []; } catch { return []; }
}

/** Persiste usuarios */
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

/** Crea usuario demo si no existe (seed) */
(function seedDefaultUser() {
  const users = getUsers();
  const exists = users.some(u => u.email === 'usuario1@mitienda.com');
  if (!exists) {
    users.push({
      id: Date.now(),
      name: 'Usuario Demo',
      email: 'usuario1@mitienda.com',
      password: 'password', // demo
    });
    saveUsers(users);
  }
})();

/** Registro */
export function register({ name, email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = getUsers();
      const exists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
      if (exists) return reject(new Error('Ese correo ya está registrado'));

      const newUser = {
        id: Date.now(),
        name: name?.trim() || '',
        email: email.trim(),
        password, // en demo plano; en real: hash
      };
      users.push(newUser);
      saveUsers(users);

      // Devolvemos objeto sin password
      const { password: _pw, ...safeUser } = newUser;
      resolve(safeUser);
    }, 500);
  });
}

/** Login */
export function login({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = getUsers();
      const found = users.find(
        u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );
      if (!found) return reject(new Error('Credenciales inválidas'));

      const { password: _pw, ...safeUser } = found;
      resolve(safeUser);
    }, 500);
  });
}

/** Logout */
export function logout() {
  return Promise.resolve(true);
}
