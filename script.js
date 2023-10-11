function showOptions() {
    const role = document.getElementById('role').value;
    const alumnoOptions = document.getElementById('alumnoOptions');
    const profesorOptions = document.getElementById('profesorOptions');

    if (role === 'alumno') {
        alumnoOptions.classList.remove('hidden');
        profesorOptions.classList.add('hidden');
    } else if (role === 'profesor') {
        profesorOptions.classList.remove('hidden');
        alumnoOptions.classList.add('hidden');
    }
}

function verMaterias() {
    alert('Acción: Ver Materias');
}

function verCalificaciones() {
    alert('Acción: Ver Calificaciones');
}

function darDeBajaMateria() {
    alert('Acción: Dar de Baja Materia');
}

function verEstudiantes() {
    alert('Acción: Ver Estudiantes');
}

function calificarEstudiantes() {
    alert('Acción: Calificar Estudiantes');
}

function verTotalesAprobadosReprobados() {
    alert('Acción: Ver Totales Aprobados/Reprobados');
}
