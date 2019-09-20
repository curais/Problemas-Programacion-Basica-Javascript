/*
37. Cargar las notas de los alumnos de un colegio en función del número de cursos y del número
    de alumnos por curso.
*/
let materias = {
    ciencias: [
        { nombre: 'Paco', calificacion: 3 },
        { nombre: 'Maria', calificacion: 7 },
        { nombre: 'Josefina', calificacion: 6 }
    ],
    matematicas: [
        { nombre: 'Paco', calificacion: 8 },
        { nombre: 'Maria', calificacion: 8 },
        { nombre: 'Jose', calificacion: 10 },
        { nombre: 'Mariana', calificacion: 7 }
    ]
    ,
    lenguas:
        [{ nombre: 'Natalia', calificacion: 9 }]
}

let ls = [];
for (materia in materias) {
    ls.push(materias[materia]);
}

ls.sort((a,b) => {
    if(a.length === b.length) return 0;
    return (a.length < b.length) ? -1 : 1;
});

ls.forEach((materia) => {
    materia.forEach((alumno) => {
        console.log(`Nombre: ${alumno.nombre}, calificiacion: ${alumno.calificacion}`);
    });
});
