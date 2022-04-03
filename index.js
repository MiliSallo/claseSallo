
//DESAFÍO COMPLEMENTARIO DEL 20/3

/*let usuarioIngresado = prompt ("Ingresá tu nombre de usuario");
while (usuarioIngresado != "exb788"){
    alert ("Usuario incorrecto, vuelva a intentar");
    usuarioIngresado = prompt ("Ingresá tu nombre de usuario");
}
alert ("Bienvenido al sistema");*/

////////////////////////


// DESAFÍO ENTREGABLE, CREAR UN SIMULADOR
let consulta = 700;
let peluqueria = 600;
let ecografia = 1500;
let cirugia = 5000;
let coseguro = 300;

let servicioSeleccionado 

do{

    servicioSeleccionado = prompt ("Seleccioná un servicio");

    if (servicioSeleccionado == "consultorio"){
        alert ("Has seleccionado consultorio");
        break;
    }
    else if (servicioSeleccionado == "ecografia"){
        alert ("Has seleccionado ecografia");
        break;
    }
    else if (servicioSeleccionado == "cirugia"){
        alert ("Has seleccionado cirugia");
        break;
    }
    else if (servicioSeleccionado == "peluqueria"){
        alert ("Has seleccionado peluqueria");
        break;
    }
    else {
        alert ("Lo sentimos, no contamos con ese servicio");
    }

    
}while (servicioSeleccionado != "ESC")

function calcularPrecioServicio (servicioSeleccionado){
    switch (servicioSeleccionado){
        case "consultorio":
            alert (`Debes abonar la consulta de: $${consulta} más un coseguro de $${coseguro}`);
            alert (`Tu total a abonar es de  $${consulta + coseguro}`)
            break;
            case "peluqueria":
                alert (`Debes abonar la consulta de: $${peluqueria} más un coseguro de $${coseguro}`);
                alert (`Tu total a abonar es de  $${peluqueria + coseguro}`)
                break;
                case "ecografia":
                    alert (`Debes abonar la consulta de: $${ecografia} más un coseguro de $${coseguro}`);
                    alert (`Tu total a abonar es de  $${ecografia + coseguro}`)
                    case "cirugia":
                        alert (`Debes abonar la consulta de: $${cirugia} más un coseguro de $${coseguro}`);
                        alert (`Tu total a abonar es de  $${cirugia + coseguro}`)
                        break;
                        default:
                            alert ("No se puede calcular");
                            break;

    }
}

calcularPrecioServicio(servicioSeleccionado);