const hacerReservaBoton = document.getElementById("btn_hacerReserva");


hacerReservaBoton.addEventListener('click', async () => {
    //alert("se realiza reserva");
    let nombre = prompt("Ingresar Nombre");
    let email = prompt("Ingresar email");
    let telefono = prompt("Ingresar telefono");
    let hayError  = false;

    if (nombre){
        console.log(`nombre ingresado : ${nombre}`);
        if ( nombre.length <= 2 ) {
            hayError = true;
            alert(`el nombre "${nombre}" debe tener un largo mayor a 2 caracteres`);
            console.log(`el nombre "${nombre}" debe tener un largo mayor a 2 caracteres`);
        }
    } else {
        hayError = true;
        alert(`debe ingresar un nombre`);
        console.log(`debe ingresar un nombre`);       
    }   

    if (email){
        console.log(`email ingresado :  ${email}`);
        if ( !email.includes("@") ){
            hayError = true;
            alert(`el email "${email}" debe contener caracter @`);
            console.log(`el email "${email}" debe contener caracter @`)
        }
  
    }  else {
            hayError = true;
            alert(`debe ingresar un email`);
            console.log(`debe ingresar un email`);       
    } 


    if (telefono){
        console.log(`telefono ingresado : ${telefono}`);
        if (isNaN(parseInt(telefono))) {
            hayError = true; 
           alert(`el telefono ${telefono} debe ser un numero entero`);
           console.log(`el telefono ${telefono} debe ser un numero entero`);
        }
    }else {
        hayError = true;
        alert(`debe ingresar un telefono`);
        console.log(`debe ingresar un telefono`);        
    }      


    if (hayError === true ){
        alert("vuelta a intentar tomando en cuenta los errores indicados");
    }
    else{
        alert(`cita reservada a nombre de ${nombre}`);
    }



});