var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @abstract Persona - Clase abstracta del objeto persona
 * @param nombre - Atributo que contiene un string del nombre del objeto persona.
 * @param apellidos - Atributo que contiene un string del apellido del objeto persona.
 * @param fechaNacimiento - Atributo que contiene un Date del nacimiento del objeto persona.
 * @returns Objetos Estudiante / Profesor formados a partir de Persona
 *
 */
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, fechaNacimiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
    }
    // Getters
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.getFechaNacimiento = function () {
        return this.fechaNacimiento;
    };
    // Setters
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.setApellidos = function (apellidos) {
        this.apellidos = apellidos;
    };
    Persona.prototype.setFechaNacimiento = function (fecha) {
        this.fechaNacimiento = fecha;
    };
    return Persona;
}());
// Clase Estudiante
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, apellidos, fechaNacimiento, emailInstitucional) {
        var _this = _super.call(this, nombre, apellidos, fechaNacimiento) || this;
        _this.emailInstitucional = emailInstitucional;
        return _this;
    }
    Estudiante.prototype.getEmailInstitucional = function () {
        return this.emailInstitucional;
    };
    Estudiante.prototype.setEmailInstitucional = function (email) {
        this.emailInstitucional = email;
    };
    Estudiante.prototype.mostrarDatos = function () {
        return "Estudiante: ".concat(this.getNombre(), " ").concat(this.getApellidos(), " - Fecha de Nacimiento: ").concat(this.getFechaNacimiento().toLocaleDateString(), " - Email: ").concat(this.getEmailInstitucional());
    };
    return Estudiante;
}(Persona));
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(nombre, apellidos, fechaNacimiento, emailInstitucional, horarioTutorias) {
        var _this = _super.call(this, nombre, apellidos, fechaNacimiento) || this;
        _this.emailInstitucional = emailInstitucional;
        _this.horarioTutorias = horarioTutorias;
        return _this;
    }
    // Getters
    Profesor.prototype.getEmailInstitucional = function () {
        return this.emailInstitucional;
    };
    Profesor.prototype.getHorarioTutorias = function () {
        return this.horarioTutorias;
    };
    // Setters
    Profesor.prototype.setEmailInstitucional = function (email) {
        this.emailInstitucional = email;
    };
    Profesor.prototype.setHorarioTutorias = function (horario) {
        this.horarioTutorias = horario;
    };
    // Mostrar Datos
    Profesor.prototype.mostrarDatos = function () {
        return "Profesor: ".concat(this.getNombre(), " ").concat(this.getApellidos(), " - Fecha de Nacimiento: ").concat(this.getFechaNacimiento().toLocaleDateString(), " - Email: ").concat(this.getEmailInstitucional(), " - Tutorias: ").concat(this.getHorarioTutorias());
    };
    return Profesor;
}(Persona));
// Clase Asignatura
var Asignatura = /** @class */ (function () {
    function Asignatura(codigo, nombre, titulacion) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.titulacion = titulacion;
        this.profesores = [];
        this.estudiantes = [];
    }
    // Getters
    Asignatura.prototype.getCodigo = function () {
        return this.codigo;
    };
    Asignatura.prototype.getNombre = function () {
        return this.nombre;
    };
    Asignatura.prototype.getTitulacion = function () {
        return this.titulacion;
    };
    Asignatura.prototype.getProfesor = function () {
    };
    // Agregar profesores y estudiantes
    Asignatura.prototype.agregarProfesor = function (profesor) {
        this.profesores.push(profesor);
    };
    Asignatura.prototype.agregarEstudiante = function (estudiante, calificacion) {
        this.estudiantes.push({ estudiante: estudiante, calificacion: calificacion });
    };
    // Mostrar los datos personales de todos los profesores que imparten la asignatura.
    Asignatura.prototype.mostrarProfesores = function () {
        console.log("\nProfesores de la asignatura:");
        for (var i = 0; i < this.profesores.length; i++) {
            console.log(this.profesores[i].mostrarDatos());
        }
    };
    // Mostrar los datos personales de todos los estudiantes que cursan la asignatura.
    Asignatura.prototype.mostrarEstudiantes = function () {
        console.log("\nEstudiantes de la asignatura:");
        for (var i = 0; i < this.estudiantes.length; i++) {
            var ec = this.estudiantes[i];
            console.log(ec.estudiante.mostrarDatos() + " - Calificaci\u00F3n: ".concat(ec.calificacion));
        }
    };
    return Asignatura;
}());
// Pruebas
var estudiante1 = new Estudiante("Ana", "Pérez", new Date(2000, 4, 15), "ana@ull.edu.es");
var estudiante2 = new Estudiante("Luis", "García", new Date(1999, 10, 20), "luis@ull.edu.es");
var profesor1 = new Profesor("Carlos", "Martínez", new Date(1975, 6, 30), "carlos@ull.edu.es", "Lunes y Miércoles 10-12");
var resultado1 = estudiante1.mostrarDatos();
var resultado2 = estudiante2.mostrarDatos();
var resultado3 = profesor1.mostrarDatos();
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
var asig = new Asignatura("DSI102", "Desarrollo de Sistemas Informaticos", "Ingeniería");
asig.agregarProfesor(profesor1);
asig.agregarEstudiante(estudiante1, 8.5);
asig.agregarEstudiante(estudiante2, 7.0);
asig.mostrarProfesores();
asig.mostrarEstudiantes();
