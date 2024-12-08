const form = document.querySelector('.contact-form');
const eventTable = document.getElementById('event-table');

// Función para generar un ID único
function generateId() {
  return Date.now();
}

// Función para almacenar un evento en el local storage
function storeEvent(eventData) {
  const eventId = generateId();
  localStorage.setItem(eventId, JSON.stringify(eventData));
}

// Función para recuperar todos los eventos del local storage
function getEvents() {
  const events = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const eventData = JSON.parse(localStorage.getItem(key));
    events.push({ ...eventData, id: key });
  }
  return events;
}

// Función para mostrar los eventos en la tabla
function displayEvents() {
  const events = getEvents();
  // ... (resto del código para crear la tabla)
  for (const event of events) {
    // Agregar botón de eliminar
    row.innerHTML += `
      <td><button onclick="deleteEvent('${event.id}')">Eliminar</button></td>
    `;
  }
}

// Función para eliminar un evento
function deleteEvent(eventId) {
  localStorage.removeItem(eventId);
  displayEvents();
}

// Al enviar el formulario
form.addEventListener('submit', (event) => {
  // ... (resto del código para capturar los datos del formulario)

  storeEvent(formData);
  displayEvents();
});

// Al cargar la página
displayEvents();