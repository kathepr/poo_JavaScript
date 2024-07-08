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
  
  // Esperar a que el DOM esté completamente cargado
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('personaForm');
    const saludo = document.getElementById('saludo');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Evitar que el formulario se envíe
  
      // Obtener los valores del formulario
      const nombre = document.getElementById('nombre').value;
      const edad = document.getElementById('edad').value;
      const sexo = document.getElementById('sexo').value;
  
      // Crear una instancia de la clase Persona
      const persona1 = new Persona(nombre, edad, sexo);
  
      // Mostrar el saludo en el HTML
      saludo.textContent = persona1.saludar();
    });
  });
  