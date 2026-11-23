// Calculadora de precio del servicio de lavado (Estudiante 2)
const paquete = document.getElementById("paquete");
const vehiculo = document.getElementById("vehiculo");
const motor = document.getElementById("motor");
const totalLavado = document.getElementById("totalLavado");

function calcularLavado() {
  const base = Number(paquete.value);
  const recargo = Number(vehiculo.value);
  const extra = motor.checked ? Number(motor.value) : 0;
  totalLavado.textContent = Math.round(base * recargo + extra);
}

if (paquete && vehiculo && motor && totalLavado) {
  [paquete, vehiculo, motor].forEach((el) => el.addEventListener("change", calcularLavado));
  calcularLavado();
}
