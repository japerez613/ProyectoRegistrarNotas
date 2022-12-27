function agregarNotas() {

    let nom = document.getElementById('nombre').value;
    let ape = document.getElementById('apellido').value;
    let not1 = document.getElementById('nota1').value;
    let not2 = document.getElementById('nota2').value;
    let not3 = document.getElementById('nota3').value;
    let not4 = document.getElementById('nota4').value;

    //Validadr el campo nombre
    if (nom === "" || ape === "") {

        Swal.fire({
            icon: 'error',
            title: 'Advertencia!',
            text: 'Los campos nombre o apellido no pueden estar vacio, por favor verificar.',
            
          })
        return false;
    }
    // Validar las notas si estan vacias
    if (not1 === "" || not2 === "" || not3 === "" || not4 === "") {

        Swal.fire({
            icon: 'error',
            title: 'Advertencia!',
            text: 'Los campos nombre de las notas no pueden estar vacio, por favor verificar.',
            
          })
        return false;

    }
    //Validar las notas, no mayor de 100 pts
    if (not1 >= 100 || not2 >= 100 || not3 >= 100 || not4 >= 100) {
        Swal.fire({
            icon: 'error',
            title: 'Advertencia!',
            text: 'La nota no puede ser mayor a 100 puntos, intente de nuevo',
            
          })
        return false;
    }
    if (not1 < 0 || not2 < 0 || not3 >= 100 || not4 < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Advertencia!',
            text: 'La nota no puede ser menor a 0 puntos, intente de nuevo',
            
          })
        return false;
    }

    //Promediar la suma de las notas entre 4
    var prom = (parseFloat(not1) + parseFloat(not2) + parseFloat(not3) + parseFloat(not4)) / 4;

    //Variable obserbacion
    var obs = 0;
    //Promedio menor o igual a 12.5 entonces aprobado, caso ocntrario aprobado
    if (prom >= 61) {
        obs = value = "Aprobado &#x2714";

    } else {
        obs = value = "No Aprobado &#x274c";

    }

    const tabla = document.getElementById('addtabla');

    const fila = document.createElement('tr');


    fila.innerHTML = `<td> ${`${ape} ${nom}`} </td><td> ${not1} </td><td> ${not2} </td><td> ${not3} </td><td> ${not4} </td><td> ${prom.toFixed(1)} </td><td> ${obs} </td>`;





    tabla.appendChild(fila);

    if (prom >= 61) {
        document.querySelector("#addtabla tr:last-child td:nth-child(6)").style.background = "#B3DEBA";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(6)").style.background = "#FFCABA";
    }
    if (not1 >= 61) {
        document.querySelector("#addtabla tr:last-child td:nth-child(2)").style.color = "blue";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(2)").style.color = "red";
    }
    if (not2 >= 61) {
        document.querySelector("#addtabla tr:last-child td:nth-child(3)").style.color = "blue";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(3)").style.color = "red";
    }
    if (not3 >= 61) {
        document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "blue";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "red";
    }
    if (not4 >= 61) {
        document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.color = "blue";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.color = "red";
    }



    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
    document.getElementById('nota4').value = '';


}

function info() {


    Swal.fire({
        title: '<h2>INSTRUCCIONES</h2>',
        icon: 'info',
        html: '<ol><li>Se debe ingresar el nombre y apellido del alumno.</li><li>Se debe ingresar la nota del alumno en cada campo.</li><li>La nota del alumno no debe ser mayor a 100 puntos.</li><li>Si los campos vacios, te aparece un mensaje que debes de llenar los campos.</li><li>Se debe de dar clic, en el botón Registrar para ingresar los datos en el sistema.</li><li>Si desea Cancelar el registro debe de dar clic en el botón Cancelar.</li><li>En la sección de Resultados, aparece los resultados de la nota del alumno.</li></ol> ',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Listo!',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
    })
}
