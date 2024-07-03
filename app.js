/*
1) Crea un formulario de registro que pida:
  - Nombre
  - Correo
  - Teléfono
  - Contraseña
  - Pasaporte
  - Confirmar contraseña
  - Botón de enviar

  Este formulario debe validar que los campos no estén vacíos y que los datos
  esten correctamente validados, un nombre no puede contener caracteres especiales
  y debe tener minimo 2 caracteres, debe admitir espacios, la contraseña debe de 
  tener minimo 8 caracteres. El correo debe de tener un formato válido. El teléfono
  debe iniciar con el prefijo internacional y tener minimo 12 caracteres y maximo 20. 
  El pasaporte debe tener un formato válido. La confirmación de contraseña debe de
  ser igual a la contraseña.

  En caso de que los datos no sean válidos, se debe de mostrar un mensaje de error
  debajo del campo que no cumpla con la validación.
  */

const expresiones = {
  nombre: /^[a-zA-ZÀ-Öà-ö-_ ]+$/, // Permite letras, guiones bajos y espacios
  correo: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, // Correo electrónico estándar
  telefono: /^\+?[0-9]{6,15}$/, // Número de teléfono internacional
  contrasena: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[¡¿?@$%'#&*])\S{8,}$/, // Contraseña segura
  pasaporte: /^[A-Za-z0-9]{6,15}$/, // Pasaporte alfanumérico (formato puede variar)
};

const formulario = document.querySelector('#formulario');
const inputs = document.querySelectorAll('input');
const contrasena = document.querySelector('#contrasena');
const contrasena2 = document.querySelector('#confirmarContrasena');

function validarFormulario(e){
  console.log(e.target.name);
  switch(e.target.name){
    case "nombre":
      validarCampo( expresiones.nombre, e.target, 'nombre');
    break;
    case "correo":
      validarCampo( expresiones.correo, e.target, 'correo');
    break;
    case "telefono":
      validarCampo( expresiones.telefono, e.target, 'telefono');
    break;
    case "contrasena":
      validarCampo( expresiones.contrasena, e.target, 'contrasena');
    break;
    case "confirmarContrasena":
      validarContrasena();
    break;
    case "pasaporte":
      validarCampo( expresiones.pasaporte, e.target, 'pasaporte');
    break;
  }

}

function validarCampo(expresiones, input, campo){
  if (expresiones.test(input.value)){
    console.log('Valido');
  } else {
    console.log('Invalido');
  }
}

function validarContrasena(){
  if (contrasena.value == contrasena2.value){

  } else if (contrasena.value != contrasena2.value){
    
  }
}


inputs.forEach( input => input.addEventListener('keyup', validarFormulario));

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
})