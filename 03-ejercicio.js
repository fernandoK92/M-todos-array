'use strict';
function calcularPromedio(calificaciones) {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
      suma += calificaciones[i];
    }
    return Math.floor(suma / calificaciones.length);
  }
  
  const calificaciones = [80, 70, 90, 85, 75];
  const promedio = calcularPromedio(calificaciones);
  alert(promedio); 