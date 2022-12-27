function agregarCurso()
{
    let curso = document.getElementById('curso').value;
    let profe = document.getElementById('profe').value;
    let seccion = document.getElementById('seccion').value;
    let jornada = document.getElementById('jornada').value;

    document.getElementById('datoCurso').innerHTML = 
    `<h4>NOMBRE DEL PROFESOR: ${profe}</h4>
    <h4>NOMBRE DEL CURSO: ${curso}</h4>
    <h4>SECCION: ${seccion}</h4>
    <h4>JORNADA: ${jornada}</h4>`;
    document.getElementById('curso').value = '';
    document.getElementById('profe').value = '';
    document.getElementById('seccion').value = '';
    document.getElementById('jornada').value = '';
}