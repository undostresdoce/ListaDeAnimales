class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  datosPropietario() {
    return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion} y el número telefónico de contacto: ${this._telefono}.`;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  get direccion() {
    return this._direccion;
  }

  set direccion(value) {
    this._direccion = value;
  }

  get telefono() {
    return this._telefono;
  }

  set telefono(value) {
    this._telefono = value;
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }

  getTipo() {
    return `El tipo de animal es un: ${this._tipo}`;
  }

  get tipo() {
    return this._tipo;
  }

  set tipo(value) {
    this._tipo = value;
  }
}

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }

  get nombreMascota() {
    return this._nombreMascota;
  }

  set nombreMascota(value) {
    this._nombreMascota = value;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(value) {
    this._enfermedad = value;
  }
}

const listaAnimales = (event) => {
  event.preventDefault();

  const formulario = document.querySelector("form");

  const mascota = new Mascota(
    formulario.propietario.value,
    formulario.direccion.value,
    formulario.telefono.value,
    formulario.tipo.value,
    formulario.nombreMascota.value,
    formulario.enfermedad.value
  );

  const resultado = document.querySelector("#resultado ul");
  const liElement = document.createElement("li");

  const datosPropietario = mascota.datosPropietario();
  const tipoAnimal = mascota.getTipo();
  const nombreEnfermedad = mascota.enfermedad;

  liElement.innerHTML = `
    ${datosPropietario}<br>
    ${tipoAnimal}, mientras que el nombre de la mascota es: ${mascota.nombreMascota} y la enfermedad es: ${nombreEnfermedad}
  `;

  resultado.appendChild(liElement);

  limpiarCamposFormulario(formulario);
};

const limpiarCamposFormulario = (formulario) => {
  formulario.reset();
};

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("form");
  formulario.addEventListener("submit", listaAnimales);
});
