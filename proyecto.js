// ========================================================
// ========================================================

// Función para seleccionar un evento desde las tarjetas
function seleccionarEvento(nombreEvento) {
  const inputEvento = document.getElementById('eventoSeleccionado');
  if (inputEvento) {
    inputEvento.value = nombreEvento;
    alert(`✓ Has seleccionado el evento: ${nombreEvento}`);
    // Desplaza la vista al formulario de reserva
    document.getElementById('reservas').scrollIntoView({ behavior: 'smooth' });
  }
}

// Función para seleccionar una mesa interactiva en el plano
function seleccionarMesa(nombreMesa, elementoId) {
  // Desmarcar todas las mesas
  const todasLasMesas = document.querySelectorAll('.table-item');
  todasLasMesas.forEach(mesa => {
    if (!mesa.classList.contains('occupied')) {
      mesa.classList.remove('selected');
      const estadoSpan = mesa.querySelector('.table-status');
      if (estadoSpan) estadoSpan.textContent = 'Disponible';
    }
  });

  // Marcar la mesa seleccionada
  const mesaSeleccionada = document.getElementById(elementoId);
  if (mesaSeleccionada) {
    mesaSeleccionada.classList.add('selected');
    const estadoSpan = mesaSeleccionada.querySelector('.table-status');
    if (estadoSpan) estadoSpan.textContent = 'Seleccionada';
  }

  // Actualizar el valor en el formulario
  const inputMesa = document.getElementById('mesaSeleccionada');
  if (inputMesa) {
    inputMesa.value = nombreMesa;
  }
}

// Generador de SVG Vectorial para el Código QR
function generarQRVectorial(codigoReserva) {
  return `
    <svg class="qr-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="white" />
      <!-- Cuadros de esquina -->
      <rect x="6" y="6" width="28" height="28" fill="#0c0814" rx="3" />
      <rect x="10" y="10" width="20" height="20" fill="white" />
      <rect x="14" y="14" width="12" height="12" fill="#bd00ff" rx="2" />

      <rect x="66" y="6" width="28" height="28" fill="#0c0814" rx="3" />
      <rect x="70" y="10" width="20" height="20" fill="white" />
      <rect x="74" y="14" width="12" height="12" fill="#bd00ff" rx="2" />

      <rect x="6" y="66" width="28" height="28" fill="#0c0814" rx="3" />
      <rect x="10" y="70" width="20" height="20" fill="white" />
      <rect x="14" y="74" width="12" height="12" fill="#bd00ff" rx="2" />

      <!-- Píxeles del patrón QR -->
      <rect x="42" y="8" width="6" height="18" fill="#0c0814" />
      <rect x="52" y="6" width="8" height="6" fill="#0c0814" />
      <rect x="52" y="16" width="8" height="10" fill="#0c0814" />
      <rect x="8" y="42" width="16" height="6" fill="#0c0814" />
      <rect x="6" y="52" width="6" height="8" fill="#0c0814" />
      <rect x="16" y="52" width="8" height="8" fill="#0c0814" />

      <rect x="38" y="38" width="24" height="24" fill="#bd00ff" rx="3" />
      <rect x="44" y="44" width="12" height="12" fill="white" />
      <rect x="48" y="48" width="4" height="4" fill="#0c0814" />

      <rect x="66" y="42" width="12" height="8" fill="#0c0814" />
      <rect x="82" y="40" width="12" height="6" fill="#0c0814" />
      <rect x="40" y="68" width="10" height="16" fill="#0c0814" />
      <rect x="54" y="76" width="10" height="18" fill="#0c0814" />
      <rect x="68" y="68" width="12" height="12" fill="#0c0814" />
      <rect x="84" y="68" width="10" height="26" fill="#0c0814" />
    </svg>
  `;
}

// Manejador del Formulario de Reserva
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reservationForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita recargar la página

      const nombre = document.getElementById('nombreCliente').value;
      const evento = document.getElementById('eventoSeleccionado').value;
      const mesa = document.getElementById('mesaSeleccionada').value;

      // Generar código único aleatorio tipo PAT-7892
      const codigoAleatorio = 'PAT-' + Math.floor(1000 + Math.random() * 9000);

      // Asignar los datos al pase digital QR
      document.getElementById('resCodigo').textContent = codigoAleatorio;
      document.getElementById('resNombre').textContent = nombre;
      document.getElementById('resEvento').textContent = evento;
      document.getElementById('resMesa').textContent = mesa;

      let totalReservasCount = 1; // Contador global de reservas

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reservationForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita recargar la página

      const nombre = document.getElementById('nombreCliente').value;
      const evento = document.getElementById('eventoSeleccionado').value;
      const mesa = document.getElementById('mesaSeleccionada').value;

      // Generar código único aleatorio tipo PAT-7892
      const codigoAleatorio = 'PAT-' + Math.floor(1000 + Math.random() * 9000);

      // Asignar los datos al pase digital QR
      document.getElementById('resCodigo').textContent = codigoAleatorio;
      document.getElementById('resNombre').textContent = nombre;
      document.getElementById('resEvento').textContent = evento;
      document.getElementById('resMesa').textContent = mesa;

      // ----------------------------------------------------
      // AQUÍ AGREGAS EL CONTADOR DE RESERVAS:
      // ----------------------------------------------------
      totalReservasCount++;
      const spanContador = document.getElementById('contadorReservas');
      if (spanContador) {
        spanContador.textContent = totalReservasCount;
      }
      // ----------------------------------------------------

      // Inyectar el QR
      const qrBox = document.getElementById('qrContainer');
      if (qrBox) {
        qrBox.innerHTML = generarQRVectorial(codigoAleatorio);
      }

      // Mostrar la sección del Pase Digital y hacer scroll suave hacia él
      const paseSection = document.getElementById('paseQRSection');
      paseSection.style.display = 'block';
      paseSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
      // Inyectar el QR
      const qrBox = document.getElementById('qrContainer');
      if (qrBox) {
        qrBox.innerHTML = generarQRVectorial(codigoAleatorio);
      }

      // Mostrar la sección del Pase Digital y hacer scroll suave hacia él
      const paseSection = document.getElementById('paseQRSection');
      paseSection.style.display = 'block';
      paseSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});