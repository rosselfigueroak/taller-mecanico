// Menú desplegable en celulares
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => menu.classList.toggle("abierto"));
}

// Año actual en el pie de página
const anio = document.getElementById("anio");
if (anio) anio.textContent = new Date().getFullYear();

// Formulario de contacto (simulado)
const form = document.getElementById("formContacto");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    document.getElementById("mensaje").textContent =
      `¡Gracias, ${nombre}! Te llamaremos pronto para confirmar tu cita.`;
    form.reset();
  });
}

// Calculadora de cotización (página de mantenimiento)
const checks = document.querySelectorAll(".servicio-check");
const total = document.getElementById("total");
if (checks.length && total) {
  checks.forEach((c) =>
    c.addEventListener("change", () => {
      let suma = 0;
      checks.forEach((x) => { if (x.checked) suma += Number(x.value); });
      total.textContent = suma;
    })
  );
}
