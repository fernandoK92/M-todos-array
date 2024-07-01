'use strict';
let asignaturas = [
    { nombre: 'LAS TICS Y SOPORTE EN HARDWARE', nivel: 1 },
    { nombre: 'BASE DE DATOS RELACIONALES', nivel: 2 },
    { nombre: 'METODOLOGIAS PARA RESOLVER PROBLEMAS INFORMATICOS', nivel: 1 },
    { nombre: 'PROGRAMACION DE INTERFASES GRAFICAS', nivel: 3 },
    { nombre: 'PROYECTO INTEGRADOR DE SABERES: CREACION DE APLICACIONES', nivel: 3 },
    { nombre: 'MATEMATICA COMPUTACIONAL APLICADA', nivel: 2 }
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
let nivelBuscado = parseInt(prompt("Ingrese el nivel de la asignatura (1, 2 o 3):"));
let asignaturasFiltradas = filtrarAsignaturasPorNivel(nivelBuscado);

let mensaje = "Asignaturas del nivel " + nivelBuscado + ":\n" + asignaturasFiltradas.join("\n");
alert(mensaje);

