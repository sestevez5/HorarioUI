//--------------------------------------------------------------
// DATOS
//--------------------------------------------------------------

// 1.- conficuración de la semana
var configuracionSemana = {
    horaMinima: '08:00',
    horaMaxima: '14:00',
    diasSemanaHabiles: ['L','M','X','J','V']
}

// 2.- plantilla que se rendeizará en el gráfico (Colecció de sesiones)
var plantilla =  {
    idPlantilla: '1',
    plantillaPorDefecto: true,
    denominacion: 'prueba',
    sesionesPlantilla: [{
        diaSemana: "L",
        horaInicio: "08:00",
        horaFin: "08:55",
        idSesion: "P1L1"

    },
    {
        diaSemana: "L",
        horaInicio: "08:55",
        horaFin: "09:50",
        idSesion: "P1L2"

    },
    {
        diaSemana: "L",
        horaInicio: "09:50",
        horaFin: "10:45",
        idSesion: "P1L3"

    },
    {
        diaSemana: "L",
        horaInicio: "11:15",
        horaFin: "12:10",
        idSesion: "P1L4"

    },
    {
        diaSemana: "L",
        horaInicio: "12:10",
        horaFin: "13:05",
        idSesion: "P1L5"

    },
    {
        diaSemana: "L",
        horaInicio: "13:05",
        horaFin: "14:00",
        idSesion: "P1L6"

    },{
        diaSemana: "M",
        horaInicio: "08:00",
        horaFin: "08:55",
        idSesion: "P1M1"

    },
    {
        diaSemana: "M",
        horaInicio: "08:55",
        horaFin: "09:50",
        idSesion: "P1M2"

    },
    {
        diaSemana: "M",
        horaInicio: "09:50",
        horaFin: "10:45",
        idSesion: "P1M3"

    },
    {
        diaSemana: "M",
        horaInicio: "11:15",
        horaFin: "12:10",
        idSesion: "P1M4"

    },
    {
        diaSemana: "M",
        horaInicio: "12:10",
        horaFin: "13:05",
        idSesion: "P1M5"

    },
    {
        diaSemana: "M",
        horaInicio: "13:05",
        horaFin: "14:00",
        idSesion: "P1M6"

    },{
        diaSemana: "X",
        horaInicio: "08:00",
        horaFin: "08:55",
        idSesion: "P1X1"

    },
    {
        diaSemana: "X",
        horaInicio: "08:55",
        horaFin: "09:50",
        idSesion: "P1X2"

    },
    {
        diaSemana: "X",
        horaInicio: "09:50",
        horaFin: "10:45",
        idSesion: "P1X3"

    },
    {
        diaSemana: "X",
        horaInicio: "11:15",
        horaFin: "12:10",
        idSesion: "P1X4"

    },
    {
        diaSemana: "X",
        horaInicio: "12:10",
        horaFin: "13:05",
        idSesion: "P1X5"

    },
    {
        diaSemana: "X",
        horaInicio: "13:05",
        horaFin: "14:00",
        idSesion: "P1X6"

    },
    {
        diaSemana: "J",
        horaInicio: "08:00",
        horaFin: "08:55",
        idSesion: "P1J1"

    },
    {
        diaSemana: "J",
        horaInicio: "08:55",
        horaFin: "09:50",
        idSesion: "P1J2"

    },
    {
        diaSemana: "J",
        horaInicio: "09:50",
        horaFin: "10:45",
        idSesion: "P1J3"

    },
    {
        diaSemana: "J",
        horaInicio: "11:15",
        horaFin: "12:10",
        idSesion: "P1J4"

    },
    {
        diaSemana: "J",
        horaInicio: "12:10",
        horaFin: "13:05",
        idSesion: "P1J5"

    },
    {
        diaSemana: "J",
        horaInicio: "13:05",
        horaFin: "14:00",
        idSesion: "P1J6"

    },
    {
        diaSemana: "V",
        horaInicio: "08:00",
        horaFin: "08:55",
        idSesion: "P1V1"

    },
    {
        diaSemana: "V",
        horaInicio: "08:55",
        horaFin: "09:50",
        idSesion: "P1V2"

    },
    {
        diaSemana: "V",
        horaInicio: "09:50",
        horaFin: "10:45",
        idSesion: "P1V3"

    },
    {
        diaSemana: "V",
        horaInicio: "11:15",
        horaFin: "12:10",
        idSesion: "P1V4"

    },
    {
        diaSemana: "V",
        horaInicio: "12:10",
        horaFin: "13:05",
        idSesion: "P1V5"

    },
    {
        diaSemana: "V",
        horaInicio: "13:05",
        horaFin: "14:00",
        idSesion: "P1V6"

    }]
}

// 3.- colección de actividades que se renderizarán en el gráfico.
// OBSERVACIONES: 
// a) Igual que en ekade, su renderizado es independiente del renderizado 
//    de la plantilla
// b) En el caso de que hayan actividades en sesiones defindas en días
//    de la semana que no se hayan tenido en cuenta en la configuración
//    no habrá ningún problema. Simplemente, no serán renderizadas.
var actividades = [
    {
        idActividad: '616c632e-93d9-496b-b29c-0c39e2d8c6a1',

        sesion: {
            diaSemana: 'L',
            horaInicio: '08:00',
            horaFin: '08:55',
            idSesion: 'P1L1'
        },

        periodoVigencia: {
            idPeriodoVigencia: 'ab88957d-ef61-46c1-a659-893619ea02e0',
            denominacion: 'Curso completo',
            fechaInicio: '20210901',
            fechaFin: '20220630'
        },

        tipoActividad: {
            idTipoActividad: 'cf5aa348-2dd8-4645-ada8-7e6db13ba136',
            codigo: 'CCM',
            denominacionLarga: 'Clase colectiva de una materia',
            obligaDocentes: false,
            permiteDocentes: true,
            obligaAsignaturas: false,
            permiteAsignaturas: true,
            obligaGrupos: false,
            permiteGrupos: true,
            obligaDetalle: false,
            permiteDetalle: true,
            esLectiva: true,
            tipoPredeterminado: true

        },

        docentes: [
            {
                idDocente: '387a0e4e-4eef-4736-85ac-4236f72e03c3',
                nombre: 'Santiago',
                apellido1: 'Estévez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'sesther'
            },
            {
                idDocente: '7880b8c6-6589-482e-92ca-269ef0f6bfe5',
                nombre: 'Lucio',
                apellido1: 'Benítez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'lbenher'
            },
            {
                idDocente: '80e757ea-d6f0-4f22-84c4-0a7b566893a2',
                nombre: 'José Manuel',
                apellido1: 'Gómez',
                apellido2: 'Abreu',
                foto: '',
                alias: 'sgomabr'
            },
            {
                idDocente: 'ee8f730e-7e41-4ba5-a1d7-84c807383b72',
                nombre: 'Carolona',
                apellido1: 'Pérez',
                apellido2: 'López',
                foto: '',
                alias: 'cperlop'
            },
            {
                idDocente: 'f935e30d-7d90-411c-86c6-3618a8cea0f9',
                nombre: 'Edita',
                apellido1: 'Martín',
                apellido2: 'Sanabria',
                foto: '',
                alias: 'emarsan'
            },
            {
                idDocente: '02cd8ece-e7c9-40a7-a8a0-d661ff7aa996',
                nombre: 'Lucía',
                apellido1: 'Dorta',
                apellido2: 'Dorta',
                foto: '',
                alias: 'ldordor'
            }, {
                idDocente: '387a0e4e-4eef-4736-85ac-4236f72e03c3',
                nombre: 'Santiago',
                apellido1: 'Estévez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'sesther'
            },
            {
                idDocente: '7880b8c6-6589-482e-92ca-269ef0f6bfe5',
                nombre: 'Lucio',
                apellido1: 'Benítez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'lbenher'
            },
            {
                idDocente: '80e757ea-d6f0-4f22-84c4-0a7b566893a2',
                nombre: 'José Manuel',
                apellido1: 'Gómez',
                apellido2: 'Abreu',
                foto: '',
                alias: 'sgomabr'
            },
            {
                idDocente: 'ee8f730e-7e41-4ba5-a1d7-84c807383b72',
                nombre: 'Carolona',
                apellido1: 'Pérez',
                apellido2: 'López',
                foto: '',
                alias: 'cperlop'
            },
            {
                idDocente: 'f935e30d-7d90-411c-86c6-3618a8cea0f9',
                nombre: 'Edita',
                apellido1: 'Martín',
                apellido2: 'Sanabria',
                foto: '',
                alias: 'emarsan'
            },
            {
                idDocente: '02cd8ece-e7c9-40a7-a8a0-d661ff7aa996',
                nombre: 'Lucía',
                apellido1: 'Dorta',
                apellido2: 'Dorta',
                foto: '',
                alias: 'ldordor'
            },


        ],

        asignaturas: [
            {
                idAsignatura: '03fb8932-2b7f-4c9c-89c8-3242e30f9ebb',
                codigo: 'MII',
                denominacionLarga: 'Matemáticas I'
            },
            {
                idAsignatura: '21c88887-aa1b-4e67-b915-62674e1c478c',
                codigo: 'MI2',
                denominacionLarga: 'Matemáticas II'
            },

        ],

        grupos: [ 
            {
                idGrupo: 'c93eeb67-df6b-4d99-9d52-ecbab0cad82d',
                codigo: '1BACA',
                denominacionLarga: '1º Bachillerato A'
            },
            {
                idGrupo: 'c6e390b7-7d76-4556-832d-09c2cf4f36a3',
                codigo: '1BACB',
                denominacionLarga: '1º Bachillerato B'
            },
            {
                idGrupo: 'c93eeb67-df6b-4d99-9d52-ecbab0cad82d',
                codigo: '2BACA',
                denominacionLarga: '2º Bachillerato A'
            },
            {
                idGrupo: 'c6e390b7-7d76-4556-832d-09c2cf4f36a3',
                codigo: '2BACB',
                denominacionLarga: 'º Bachillerato B'
            },
            {
                idGrupo: 'c93eeb67-df6b-4d99-9d52-ecbab0cad82d',
                codigo: '1BACA',
                denominacionLarga: '1º Bachillerato A'
            },
            {
                idGrupo: 'c6e390b7-7d76-4556-832d-09c2cf4f36a3',
                codigo: '1BACB',
                denominacionLarga: '1º Bachillerato B'
            },
            {
                idGrupo: 'c93eeb67-df6b-4d99-9d52-ecbab0cad82d',
                codigo: '2BACA',
                denominacionLarga: '2º Bachillerato A'
            },
            {
                idGrupo: 'c6e390b7-7d76-4556-832d-09c2cf4f36a3',
                codigo: '2BACB',
                denominacionLarga: 'º Bachillerato B'
            },
            {
                idGrupo: 'c93eeb67-df6b-4d99-9d52-ecbab0cad82d',
                codigo: '1BACA',
                denominacionLarga: '1º Bachillerato A'
            },
            {
                idGrupo: 'c6e390b7-7d76-4556-832d-09c2cf4f36a3',
                codigo: '1BACB',
                denominacionLarga: '1º Bachillerato B'
            },
            {
                idGrupo: 'c93eeb67-df6b-4d99-9d52-ecbab0cad82d',
                codigo: '2BACA',
                denominacionLarga: '2º Bachillerato A'
            },
            {
                idGrupo: 'c6e390b7-7d76-4556-832d-09c2cf4f36a3',
                codigo: '2BACB',
                denominacionLarga: 'º Bachillerato B'
            },
            {
                idGrupo: 'c93eeb67-df6b-4d99-9d52-ecbab0cad82d',
                codigo: '1BACA',
                denominacionLarga: '1º Bachillerato A'
            },
            {
                idGrupo: 'c6e390b7-7d76-4556-832d-09c2cf4f36a3',
                codigo: '1BACB',
                denominacionLarga: '1º Bachillerato B'
            },
            {
                idGrupo: 'c93eeb67-df6b-4d99-9d52-ecbab0cad82d',
                codigo: '2BACA',
                denominacionLarga: '2º Bachillerato A'
            },
            {
                idGrupo: 'c6e390b7-7d76-4556-832d-09c2cf4f36a3',
                codigo: '2BACB',
                denominacionLarga: 'º Bachillerato B'
            }, {
                idGrupo: 'c93eeb67-df6b-4d99-9d52-ecbab0cad82d',
                codigo: '1BACA',
                denominacionLarga: '1º Bachillerato A'
            },
            {
                idGrupo: 'c6e390b7-7d76-4556-832d-09c2cf4f36a3',
                codigo: '1BACB',
                denominacionLarga: '1º Bachillerato B'
            },
            {
                idGrupo: 'c93eeb67-df6b-4d99-9d52-ecbab0cad82d',
                codigo: '2BACA',
                denominacionLarga: '2º Bachillerato A'
            },
            {
                idGrupo: 'c6e390b7-7d76-4556-832d-09c2cf4f36a3',
                codigo: '2BACB',
                denominacionLarga: 'º Bachillerato B'
            },
            {
                idGrupo: 'c93eeb67-df6b-4d99-9d52-ecbab0cad82d',
                codigo: '1BACA',
                denominacionLarga: '1º Bachillerato A'
            },
            {
                idGrupo: 'c6e390b7-7d76-4556-832d-09c2cf4f36a3',
                codigo: '1BACB',
                denominacionLarga: '1º Bachillerato B'
            },
            {
                idGrupo: 'c93eeb67-df6b-4d99-9d52-ecbab0cad82d',
                codigo: '2BACA',
                denominacionLarga: '2º Bachillerato A'
            },
            {
                idGrupo: 'c6e390b7-7d76-4556-832d-09c2cf4f36a3',
                codigo: '2BACB',
                denominacionLarga: 'º Bachillerato B'
            },


        ],

        dependencia: {
            idDependencia: 'f217df71-a791-4439-ad5e-3460dd8b17f3',
            codigo: '3.1',
            denominacionLarga: 'Aula 3.1'
        },

        detalleActividad: "Se imparte en el Gimnasio"

    },
  
    {
        idActividad: '75fc3ad4-da1a-4860-ae35-d8a675fa06a6',

        sesion: {
            diaSemana: 'L',
            horaInicio: '09:55',
            horaFin: '10:45',
            idSesion: 'P1L2'
        },

        periodoVigencia: {
            idPeriodoVigencia: 'ab88957d-ef61-46c1-a659-893619ea02e0',
            denominacion: 'Curso completo',
            fechaInicio: '20210901',
            fechaFin: '20220630'
        },

        tipoActividad: {
            idTipoActividad: 'cf5aa348-2dd8-4645-ada8-7e6db13ba136',
            codigo: 'CCM',
            denominacionLarga: 'Clase colectiva de una materia',
            obligaDocentes: false,
            permiteDocentes: true,
            obligaAsignaturas: false,
            permiteAsignaturas: true,
            obligaGrupos: false,
            permiteGrupos: true,
            obligaDetalle: false,
            permiteDetalle: true,
            esLectiva: true,
            tipoPredeterminado: true

        },

        docentes: [
            {
                idDocente: '387a0e4e-4eef-4736-85ac-4236f72e03c3',
                nombre: 'Santiago',
                apellido1: 'Estévez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'sesther'
            },
            {
                idDocente: '387a0e4e-4eef-4736-85ac-4236f72e03c3',
                nombre: 'Santiago',
                apellido1: 'Estévez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'sesther'
            },
            {
                idDocente: '387a0e4e-4eef-4736-85ac-4236f72e03c3',
                nombre: 'Santiago',
                apellido1: 'Estévez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'sesther'
            },
            {
                idDocente: '387a0e4e-4eef-4736-85ac-4236f72e03c3',
                nombre: 'Santiago',
                apellido1: 'Estévez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'sesther'
            },
            {
                idDocente: '387a0e4e-4eef-4736-85ac-4236f72e03c3',
                nombre: 'Santiago',
                apellido1: 'Estévez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'sesther'
            },
            {
                idDocente: '387a0e4e-4eef-4736-85ac-4236f72e03c3',
                nombre: 'Santiago',
                apellido1: 'Estévez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'sesther'
            },
            {
                idDocente: '387a0e4e-4eef-4736-85ac-4236f72e03c3',
                nombre: 'Santiago',
                apellido1: 'Estévez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'sesther'
            },
            {
                idDocente: '387a0e4e-4eef-4736-85ac-4236f72e03c3',
                nombre: 'Santiago',
                apellido1: 'Estévez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'sesther'
            }
        ],

        asignaturas: [
            {
                idAsignatura: '03fb8932-2b7f-4c9c-89c8-3242e30f9ebb',
                codigo: 'FYQ',
                denominacionLarga: 'Física y Química'
            }
        ],

        grupos: [ 
            {
            idGrupo: 'c93eeb67-df6b-4d99-9d52-ecbab0cad82d',
            codigo: '3ESOB',
            denominacionLarga: '3º ESO A'
            }
        ],

        dependencia: {
            idDependencia: 'f217df71-a791-4439-ad5e-3460dd8b17f3',
            codigo: '3.1',
            denominacionLarga: 'Aula 3.1'
        },

        detalleActividad: "Se imparte en el Gimnasio"

    },
    
    {
        idActividad: '75fc3ad4-da1a-4860-ae35-d8a675fa06a5',

        sesion: {
            diaSemana: 'L',
            horaInicio: '10:00',
            horaFin: '10:55',
            idSesion: 'P1L1'
        },

        periodoVigencia: {
            idPeriodoVigencia: 'ab88957d-ef61-46c1-a659-893619ea02e0',
            denominacion: 'Curso completo',
            fechaInicio: '20210901',
            fechaFin: '20220630'
        },

        tipoActividad: {
            idTipoActividad: 'cf5aa348-2dd8-4645-ada8-7e6db13ba136',
            codigo: 'CCM',
            denominacionLarga: 'Clase colectiva de una materia',
            obligaDocentes: false,
            permiteDocentes: true,
            obligaAsignaturas: false,
            permiteAsignaturas: true,
            obligaGrupos: false,
            permiteGrupos: true,
            obligaDetalle: false,
            permiteDetalle: true,
            esLectiva: true,
            tipoPredeterminado: true

        },

        docentes: [
            {
                idDocente: '387a0e4e-4eef-4736-85ac-4236f72e03c3',
                nombre: 'Santiago',
                apellido1: 'Estévez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'sesther'
            },
            {
                idDocente: '387a0e4e-4eef-4736-85ac-4236f72e03c3',
                nombre: 'Santiago',
                apellido1: 'Estévez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'sesther'
            },
            {
                idDocente: '387a0e4e-4eef-4736-85ac-4236f72e03c3',
                nombre: 'Santiago',
                apellido1: 'Estévez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'sesther'
            }
        ],

        asignaturas: [
            {
                idAsignatura: '03fb8932-2b7f-4c9c-89c8-3242e30f9ebb',
                codigo: 'FYQ',
                denominacionLarga: 'Física y Química'
            }
        ],

        grupos: [ 
            {
            idGrupo: 'c93eeb67-df6b-4d99-9d52-ecbab0cad82d',
            codigo: '3ESOC',
            denominacionLarga: '3º ESO A'
            }
        ],

        dependencia: {
            idDependencia: 'f217df71-a791-4439-ad5e-3460dd8b17f3',
            codigo: '3.1',
            denominacionLarga: 'Aula 3.1'
        },

        detalleActividad: "Se imparte en el Gimnasio"

    },
     
    {
        idActividad: '75fc3ad4-da1a-4860-ae35-d8a675fa06a1',

        sesion: {
            diaSemana: 'M',
            horaInicio: '11:15',
            horaFin: '12:10',
            idSesion: 'P1L4'
        },

        periodoVigencia: {
            idPeriodoVigencia: 'ab88957d-ef61-46c1-a659-893619ea02e0',
            denominacion: 'Curso completo',
            fechaInicio: '20210901',
            fechaFin: '20220630'
        },

        tipoActividad: {
            idTipoActividad: 'cf5aa348-2dd8-4645-ada8-7e6db13ba132',
            codigo: 'G',
            denominacionLarga: 'Guardia',
            obligaDocentes: false,
            permiteDocentes: true,
            obligaAsignaturas: false,
            permiteAsignaturas: true,
            obligaGrupos: false,
            permiteGrupos: true,
            obligaDetalle: false,
            permiteDetalle: true,
            esLectiva: true,
            tipoPredeterminado: true

        },

        docentes: [
            
        ],

        asignaturas: [
           
        ],

        grupos: [ 
          
        ],

        dependencia: {
            idDependencia: 'f217df71-a791-4439-ad5e-3460dd8b17f3',
            codigo: '3.1',
            denominacionLarga: 'Aula 3.1'
        },

        detalleActividad: "Se imparte en el Gimnasio"

    },

    {
        idActividad: '75fc3ad4-da1a-4860-ae35-d8a675fa06a7',

        sesion: {
            diaSemana: 'M',
            horaInicio: '08:00',
            horaFin: '08:55',
            idSesion: 'P1M1'
        },

        periodoVigencia: {
            idPeriodoVigencia: 'ab88957d-ef61-46c1-a659-893619ea02e0',
            denominacion: 'Curso completo',
            fechaInicio: '20210901',
            fechaFin: '20220630'
        },

        tipoActividad: {
            idTipoActividad: 'cf5aa348-2dd8-4645-ada8-7e6db13ba1aa',
            codigo: 'RD',
            denominacionLarga: 'Reunión de departamento',
            obligaDocentes: false,
            permiteDocentes: true,
            obligaAsignaturas: false,
            permiteAsignaturas: true,
            obligaGrupos: false,
            permiteGrupos: true,
            obligaDetalle: false,
            permiteDetalle: true,
            esLectiva: true,
            tipoPredeterminado: true

        },

        docentes: [
            {
                idDocente: '7880b8c6-6589-482e-92ca-269ef0f6bfe1',
                nombre: 'Lucio',
                apellido1: 'Benítez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'lbenher'
            }
            
        ],

        asignaturas: [
           
        ],

        grupos: [ 
          
        ],

        dependencia: {
            idDependencia: 'f217df71-a791-4439-ad5e-3460dd8b17f3',
            codigo: '3.1',
            denominacionLarga: 'Aula 3.1'
        },

        detalleActividad: "Reunión de departamento"

    },

    
    {
        idActividad: '75fc3ad4-da1a-4860-ae35-d8a675fa06a9',

        sesion: {
            diaSemana: 'L',
            horaInicio: '08:00',
            horaFin: '08:55',
            idSesion: 'P1L1'
        },

        periodoVigencia: {
            idPeriodoVigencia: 'ab88957d-ef61-46c1-a659-893619ea02e0',
            denominacion: 'Curso completo',
            fechaInicio: '20210901',
            fechaFin: '20220630'
        },

        tipoActividad: {
            idTipoActividad: 'cf5aa348-2dd8-4645-ada8-7e6db13ba1aa',
            codigo: 'RD',
            denominacionLarga: 'Reunión de departamento',
            obligaDocentes: false,
            permiteDocentes: true,
            obligaAsignaturas: false,
            permiteAsignaturas: true,
            obligaGrupos: false,
            permiteGrupos: true,
            obligaDetalle: false,
            permiteDetalle: true,
            esLectiva: true,
            tipoPredeterminado: true

        },

        docentes: [
            {
                idDocente: '7880b8c6-6589-482e-92ca-269ef0f6bfe1',
                nombre: 'Lucio',
                apellido1: 'Benítez',
                apellido2: 'Hernández',
                foto: '',
                alias: 'lbenher'
            }
            
        ],

        asignaturas: [
           
        ],

        grupos: [ 
          
        ],

        dependencia: {
            idDependencia: 'f217df71-a791-4439-ad5e-3460dd8b17f3',
            codigo: '3.1',
            denominacionLarga: 'Aula 3.1'
        },

        detalleActividad: "Reunión de departamento"

    },
       
       
]



//--------------------------------------------------------------
// CÓDIGO
//--------------------------------------------------------------
function notificacion(cadena, actividadActual) {
    document.getElementById('ultimaAccion').textContent=cadena;
    establecerActividadActual(actividadActual)
}

function establecerActividadActual(actividad) {
    if (actividad) {
        document.getElementById('act_idActividad').textContent=actividad.idActividad;
        document.getElementById('act_tipoActividad').textContent=actividad.tipoActividad.denominacionLarga;
        document.getElementById('act_sesion').textContent='Dia semana: ' + actividad.sesion.diaSemana + ', franja horaria: '+' de '+actividad.sesion.horaInicio+' a '+actividad.sesion.horaFin;
        document.getElementById('act_periodoVigencia').textContent=actividad.periodoVigencia.denominacion;
        document.getElementById('act_espacioFisico').textContent=actividad.dependencia.denominacionLarga;
        document.getElementById('act_observaciones').textContent=actividad.detalleActividad;

        var docentes='';
        actividad.docentes.forEach(docente=> docentes += docente.alias+' ');
        document.getElementById('act_docentes').textContent=docentes;

        var asignaturas='';
        actividad.asignaturas.forEach(asignatura=> asignaturas += asignatura.denominacionLarga+' ');
        document.getElementById('act_asignaturas').textContent=asignaturas;

        var grupos='';
        actividad.grupos.forEach(grupo=> grupos += grupo.denominacionLarga+' ');
        document.getElementById('act_grupos').textContent=grupos;
    } else {
        document.getElementById('act_idActividad').textContent='-- No establecida --';
        document.getElementById('act_tipoActividad').textContent='';
        document.getElementById('act_sesion').textContent='';
        document.getElementById('act_periodoVigencia').textContent='';
        document.getElementById('act_espacioFisico').textContent='';
        document.getElementById('act_observaciones').textContent='';
        document.getElementById('act_docentes').textContent='';
        document.getElementById('act_asignaturas').textContent='';
        document.getElementById('act_grupos').textContent='';

    }

}

function init() {        
    // Paso 1: Sin instancia el componente que genera el horario indicándole el div contenedor.
    var graficoHorario = new H.HorarioG('div#horario');

    // Paso 2: Se invoca a su renderizado.
    // IMPORTANTE: El renderizado depende de dos objetos que se pasarán por parámetro.
    // 1) Objeto de configuración: hora de inicio y fin y días habilitados
    // 2) Plantilla Horaria que se renderizará de fondo. 
    graficoHorario.renderizarGrafico( configuracionSemana, plantilla );

    // Paso 3: Definir las actividades que se "pintarán"
    // Observaciones: Generalmente, la configuración y plantilla de fondo permanece estable y no se suele cambiar.
    //                por ese motivo se ha separado la inclusión de actividades que, a medida que se cambia la entidad de 
    //                referencia se cambia el conjunto de actividades pero no el fondo del gráfico.
    graficoHorario.actualizarActividades(actividades);


    // Paso 4: Subscripción a los observables ofrecidos por el objeto "HorarioG"
    // 4.1) ESTRATEGIA PARA COMUNICAR AL EXTERIOR LA INTERACCIÓN DEL USUARIO
    // la interacción de los usuarios con el gráfico se hace uno deprogramación reactiva.
    // Este paradigma de programación contempla la existencia de artefactos ( observables <emit>) que emiten datos y 
    // y que pueden ser observaos por los clientes a través del método "Subscribe". Se ha usado la librería "rxjs"
    // 4.2) INTERACIÓN DEL USUARIO
    // Se ha modelado 5 formas de interación. Se podrá detectar la intención del usuario de:
    //  a) Eliminar una actividad
    //  b) Duplicar una actividad
    //  c) Mover una actividad
    //  d) Seleccionar una actividad.
    //  e) Añadir una actividad a una sesión.
    // 4.2) INFORMACIÓN OFRECIDA EN LAS SUBSCRIPCIONES.
    //  a) En las primeras 4 interacción la herramienta cliente dispondrá de la actividad afectada por la interacción.
    //  b) En la sección anterior "Datos" se podrá observar la estructura del objeto actividad,
    //  c) En la opción "e) Añadir una actividad a una sesión" se devuelve enla que se desea crear la nueva actividad.
    //  b) En la sección anterior "Datos" se podrá observar la estructura del objeto sesion. es un nodo interno al objeto "plantilla"

    graficoHorario.eliminarActividad$.subscribe(
        act => { notificacion('. . . Eliminación la actividad: ' + act.idActividad, act);}
    );

    graficoHorario.duplicarActividad$.subscribe(
        act => notificacion('. . . Copiando la actividad <' + act.idActividad + '> a la sesión <' + act.sesion.idSesion + '>', act)
    );

    graficoHorario.moverActividad$.subscribe(
        act => notificacion('. . . Moviendo la actividad <' + act.idActividad + '> a la sesión <' + act.sesion.idSesion + '>', act)
    );

    graficoHorario.seleccionActividad$.subscribe(
        act => notificacion('. . . Seleccionado la actividad <' + act.idActividad + '> a la sesión <' + act.sesion.idSesion + '>', act)
    );

    graficoHorario.anyadirActividadEnSesion$.subscribe(
        ses => notificacion('. . . Añadiendo una actividad en la sesión: '+ses.idSesion, null)
    );
}

init();


