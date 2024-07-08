// Definición de la clase Persona
class Persona {
    constructor(nombre, edad, sexo) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
    }
  
    // Método saludar que retorna un saludo
    saludar() {
      return `Hola, mi nombre es ${this.nombre}.`;
    }
  }
  
  // Definición de la clase Estudiante que hereda de Persona
  class Estudiante extends Persona {
    constructor(nombre, edad, sexo, carrera) {
      super(nombre, edad, sexo); // Llama al constructor de la clase padre
      this.carrera = carrera;    // Nueva propiedad carrera
    }
  
    // Método estudiar que retorna un mensaje sobre la carrera
    estudiar() {
      return `Estoy estudiando ${this.carrera}.`;
    }
  }
  
  // Esperar a que el DOM esté completamente cargado
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('estudianteForm');
    const saludo = document.getElementById('saludo');
    const mensajeEstudio = document.getElementById('mensajeEstudio');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Evitar que el formulario se envíe
  
      // Obtener los valores del formulario
      const nombre = document.getElementById('nombre').value;
      const edad = document.getElementById('edad').value;
      const sexo = document.getElementById('sexo').value;
      const carrera = document.getElementById('carrera').value;
  
      // Crear una instancia de la clase Estudiante
      const estudiante1 = new Estudiante(nombre, edad, sexo, carrera);
  
      // Mostrar el saludo y el mensaje de estudio en el HTML
      saludo.textContent = estudiante1.saludar();
      mensajeEstudio.textContent = estudiante1.estudiar();
    });
  });
  