'use strict';
let asignaturas = [
    { nombre: 'Matematica computacional', nivel: 1 },
    { nombre: 'Metodologías para resolver problemas informáticos', nivel: 1 },
    { nombre: 'Base de datos relacionales', nivel: 1 },
    { nombre: 'Las tics y soporte en hardware', nivel: 1 },
    { nombre: 'Programación de interfaces gráficas y estructura de datos', nivel: 1 },
    { nombre: 'Proyecto integrador de saberes: creación de aplicaciones de escritorio', nivel: 1 },
    { nombre: 'Prácticas de servicio comunitario', nivel: 1 },
    { nombre: 'Sistemas digitales programables', nivel: 2 },
    { nombre: 'Sistemas de información', nivel: 2 },
    { nombre: 'Programación orientada a objetos', nivel: 2 },
    { nombre: 'Procesos contables', nivel: 2 },
    { nombre: 'Gestion de base de datos', nivel: 2 },
    { nombre: 'Proyecto integrador de saberes: creación de aplicaciones de escritorio', nivel: 2 },
    { nombre: 'Prácticas de servicio comunitario', nivel: 2 },
    { nombre: 'Programacion de aplicaciones para dispositivos móviles', nivel: 3 },
    { nombre: 'Probabilidades y procesos estocásticos', nivel: 3 },
    { nombre: 'Herramientas informáticas para el despliegue de diagramas', nivel: 3 },
    { nombre: 'Aplicaciones tecnológicas autónomas', nivel: 3 },
    { nombre: 'Software aplicativo', nivel: 3 },
    { nombre: 'Proyecto integrador de saberes: creación de aplicaciones web con base a la arquitectura cliente servidor', nivel: 3 },
    { nombre: 'Prácticas laborales', nivel: 3 },
    { nombre: 'Comunicaciones y redes de datos', nivel: 4 },
    { nombre: 'Sistemas operativos', nivel: 4 },
    { nombre: 'Herramientas case', nivel: 4 },
    { nombre: 'Derecho y seguridad informática', nivel: 4 },
    { nombre: 'Tendencias tecnológicas', nivel: 4 },
    { nombre: 'Desarrollo de proyectos de software', nivel: 4 },
    { nombre: 'Prácticas laborales', nivel: 4 }
];

function filtrarAsignaturasPorNivel(nivel) {
    let resultado = [];
    for (let i = 0; i < asignaturas.length; i++) {
        if (asignaturas[i].nivel === nivel) {
            resultado.push(asignaturas[i].nombre);
        }
    }
    return resultado;
}

let nivelBuscado = parseInt(prompt("Ingrese el nivel de la asignatura (1, 2, 3 o 4):"));
let asignaturasFiltradas = filtrarAsignaturasPorNivel(nivelBuscado);

let mensaje = "Asignaturas del nivel " + nivelBuscado + ":\n" + asignaturasFiltradas.join("\n");
alert(mensaje);

