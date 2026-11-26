// ========================================================
// LÓGICA DE LOGIN ADMINISTRADOR - TICKETBAR
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const usuarioInput = document.getElementById('usuario').value.trim();
      const passwordInput = document.getElementById('password').value.trim();

      // Credenciales de prueba para el administrador
      const usuarioValido = "admin";
      const passwordValido = "patrona2026";

      if (usuarioInput === usuarioValido && passwordInput === passwordValido) {
        alert("¡Acceso exitoso! Bienvenido al panel de control de La Patrona.");
        // Redirige al panel o vista principal de administración
        window.location.href = "index.html"; 
      } else {
        alert("⚠️ Usuario o contraseña incorrectos. Intenta de nuevo.");
      }
    });
  }
});