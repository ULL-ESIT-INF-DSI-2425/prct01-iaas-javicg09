/**
 * @abstract Persona - Clase abstracta del objeto persona
 * @param nombre - Atributo que contiene un string del nombre del objeto persona.
 * @param apellidos - Atributo que contiene un string del apellido del objeto persona.
 * @param fechaNacimiento - Atributo que contiene un Date del nacimiento del objeto persona.
 * @returns Objetos Estudiante / Profesor formados a partir de Persona
 * 
 */
abstract class Persona {
    private nombre: string;
    private apellidos: string;
    private fechaNacimiento: Date;
  
    constructor(nombre: string, apellidos: string, fechaNacimiento: Date) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.fechaNacimiento = fechaNacimiento;
    }
  
    // Getters
    public getNombre(): string {
      return this.nombre;
    }

    public getApellidos(): string {
        return this.apellidos
    }

    public getFechaNacimiento(): Date{
        return this.fechaNacimiento
    }

    // Setters
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setApellidos(apellidos: string): void {
        this.apellidos = apellidos
    }

    public setFechaNacimiento(fecha: Date): void {
        this.fechaNacimiento = fecha;
    }

    // Metodo para mostrar los datos
    public abstract mostrarDatos(): string;
}

// Clase Estudiante
class Estudiante extends Persona {
    private emailInstitucional: string;
  
    constructor(nombre: string, apellidos: string, fechaNacimiento: Date, emailInstitucional: string) {
      super(nombre, apellidos, fechaNacimiento);
      this.emailInstitucional = emailInstitucional;
    }
  
    public getEmailInstitucional(): string {
      return this.emailInstitucional;
    }
    public setEmailInstitucional(email: string): void {
      this.emailInstitucional = email;
    }
  
    public mostrarDatos(): string {
      return `Estudiante: ${this.getNombre()} ${this.getApellidos()} - Fecha de Nacimiento: ${this.getFechaNacimiento().toLocaleDateString()} - Email: ${this.getEmailInstitucional()}`;
    }
}

class Profesor extends Persona {
    private emailInstitucional: string;
    private horarioTutorias: string;

    constructor(nombre: string, apellidos: string, fechaNacimiento: Date, emailInstitucional: string, horarioTutorias: string){
        super(nombre, apellidos, fechaNacimiento);
        this.emailInstitucional = emailInstitucional;
        this.horarioTutorias = horarioTutorias;
    }

    // Getters
    public getEmailInstitucional(): string {
        return this.emailInstitucional;
    }

    public getHorarioTutorias(): string {
        return this.horarioTutorias;
    }
    
    // Setters
    public setEmailInstitucional(email: string): void {
        this.emailInstitucional = email;
    }

    public setHorarioTutorias(horario: string): void {
        this.horarioTutorias = horario;
    }
    
    // Mostrar Datos
    public mostrarDatos(): string {
        return `Profesor: ${this.getNombre()} ${this.getApellidos()} - Fecha de Nacimiento: ${this.getFechaNacimiento().toLocaleDateString()} - Email: ${this.getEmailInstitucional()} - Tutorias: ${this.getHorarioTutorias()}`;
    }
}

// Interfaz para estudiantes
interface EstudianteCalificado {
    estudiante: Estudiante;
    calificacion: number;
}

// Clase Asignatura
class Asignatura {
    private codigo: string;
    private nombre: string;
    private titulacion: string;
    private profesores: Profesor[];
    private estudiantes: EstudianteCalificado[];
  
    constructor(codigo: string, nombre: string, titulacion: string) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.titulacion = titulacion;
      this.profesores = [];
      this.estudiantes = [];
    }

    // Getters
    public getCodigo(): string {
        return this.codigo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getTitulacion(): string {
        return this.titulacion;
    }

    public getProfesor(){

    }

    // Agregar profesores y estudiantes
    public agregarProfesor(profesor: Profesor): void {
        this.profesores.push(profesor);
    }

    public agregarEstudiante(estudiante: Estudiante, calificacion: number): void {
        this.estudiantes.push({ estudiante, calificacion });
    }

    // Mostrar los datos personales de todos los profesores que imparten la asignatura.
    public mostrarProfesores(): void {
        console.log("\nProfesores de la asignatura:");
        for (let i = 0; i < this.profesores.length; i++) {
        console.log(this.profesores[i].mostrarDatos());
        }
    }

  // Mostrar los datos personales de todos los estudiantes que cursan la asignatura.
    public mostrarEstudiantes(): void {
        console.log("\nEstudiantes de la asignatura:");
        for (let i = 0; i < this.estudiantes.length; i++) {
            const ec = this.estudiantes[i];
            console.log(ec.estudiante.mostrarDatos() + ` - Calificación: ${ec.calificacion}`);
        }
    }
}


// Pruebas
const estudiante1 = new Estudiante("Ana", "Pérez", new Date(2000, 4, 15), "ana@ull.edu.es");
const estudiante2 = new Estudiante("Luis", "García", new Date(1999, 10, 20), "luis@ull.edu.es");
const profesor1 = new Profesor("Carlos", "Martínez", new Date(1975, 6, 30), "carlos@ull.edu.es", "Lunes y Miércoles 10-12");

let resultado1 = estudiante1.mostrarDatos();
let resultado2 = estudiante2.mostrarDatos();
let resultado3 = profesor1.mostrarDatos();

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);


const asig = new Asignatura("DSI102", "Desarrollo de Sistemas Informaticos", "Ingeniería");

asig.agregarProfesor(profesor1);
asig.agregarEstudiante(estudiante1, 8.5);
asig.agregarEstudiante(estudiante2, 7.0);


asig.mostrarProfesores();
asig.mostrarEstudiantes();