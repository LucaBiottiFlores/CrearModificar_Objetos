function Consultorio(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes;
  }
  
  Consultorio.prototype.todosLosPacientes = function () {
    console.log(JSON.parse(JSON.stringify(this.pacientes)));
  };
  
  Consultorio.prototype.buscarPaciente = function (nombrePacienteABuscar) {
    var indice = -1;
  
    for (var i = 0; i < this.pacientes.length; i++) {
      if (this.pacientes[i].nombre == nombrePacienteABuscar) {
        indice = i;
      }
    }
  
    if (indice >= 0) {
      console.log(
        "Paciente encontrado, sus datos son: ",
        JSON.parse(JSON.stringify(this.pacientes[indice]))
      );
    } else {
      console.log("Paciente no encontrado, intenta con otro nombre");
    }
  };
  
  function Paciente(nombre, edad, rut, diagnostico) {
   
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;
  
    Object.defineProperty(this, "nombre", {
      enumerable: true,
      get: function () {
        return _nombre;
      },
      set: function (nuevoNombre) {
        _nombre = nuevoNombre;
      },
    });
  
    Object.defineProperty(this, "edad", {
      enumerable: true,
      get: function () {
        return _edad;
      },
      set: function (nuevoEdad) {
        _edad = nuevoEdad;
      },
    });
  
    Object.defineProperty(this, "rut", {
      enumerable: true,
      get: function () {
        return _rut;
      },
      set: function (nuevoRut) {
        _rut = nuevoRut;
      },
    });
  
    Object.defineProperty(this, "diagnostico", {
      enumerable: true,
      get: function () {
        return _diagnostico;
      },
      set: function (nuevoDiagnostico) {
        _diagnostico = nuevoDiagnostico;
      },
    });
  }
  
  // Creación pacientes con new
  const PacienteLucaBiotti = new Paciente(
    "Luca",
    30,
    "1.222.333-4",
    "Rebosante de Dulzura" // sabbe
  );
  
  const PacienteSeñoraRandom = new Paciente(
    "Señora",
    30,
    "1.222.333-4",
    "Demasiado random"
  );
  
  const ConsultorioDoctorLucaCirujíasQueMatan = new Consultorio("DoctorBiotti", [
    PacienteLucaBiotti,
    PacienteSeñoraRandom,
  ]);
  
 // Llamado a funciones
  
 ConsultorioDoctorLucaCirujíasQueMatan.todosLosPacientes();
 ConsultorioDoctorLucaCirujíasQueMatan.buscarPaciente("Luca");
 ConsultorioDoctorLucaCirujíasQueMatan.buscarPaciente("Señora");

  
