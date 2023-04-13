//Variables Globales
var cantidad;
var diametro;
var precio;

//Insertar input a clase ingreso
var ingresoClassArray = document.getElementsByClassName("ingreso");
for (let i = 0; i < ingresoClassArray.length; i++)
    ingresoClassArray[i].addEventListener("input", calcular)

//Se inicia calculadora 
function calcular(){
    diametro = document.querySelector("#diametro").value;
    cantidad = document.querySelector("#cantidad").value;
    let producto = document.querySelector("#producto").value;
    let alto = document.querySelector("#alto").value;
    let ancho = document.querySelector("#ancho").value;    
    let withLogo = document.querySelector("#logo").checked;    
    let result;

    //Ajustar precio acorde a producto seleccionado
    if (producto == "mantequilla")
        calc_mantequilla();
    else if (producto == "ecoCuero")
        calc_ecoCuero();
    else if (producto == "cintaEspiga")
        calc_espiga();
    
    // Si es base de tortas se ocultan clases no ocupadas y se añaden nuevas, Se calcula resultado con el parámetro dimension
    if(producto == "baseTortas"){
        let mostrar = document.querySelectorAll("#containerAlto, #containerAncho")
        for(let i = 0; i < mostrar.length; i ++){
            mostrar[i].classList.add("hide");
            mostrar[i].classList.remove("show");
        }

        let mostrar2 = document.querySelectorAll("#containerDiametro, #containerLogo")
        for(let i = 0; i < mostrar.length; i ++){
            mostrar2[i].classList.remove("hide");
            mostrar2[i].classList.add("show");
        }
        calc_baseTortas(withLogo);
        result = cantidad * precio;
    }
    else {
        let mostrar = document.querySelectorAll("#containerAlto, #containerAncho")
        for(let i = 0; i < mostrar.length; i ++){
            mostrar[i].classList.remove("hide");
            mostrar[i].classList.add("show");
        }
        
        let mostrar2 = document.querySelectorAll("#containerDiametro, #containerLogo")
        for(let i = 0; i < mostrar.length; i ++){
            mostrar2[i].classList.add("hide");
            mostrar2[i].classList.remove("show");
        }
        result = Math.round(alto * ancho * cantidad * precio);
    }

    //Imprime resultado
    if(result >0)
        document.querySelector("#resultado").innerHTML = "$" + result.toLocaleString("es-CL");
    else
        document.querySelector("#resultado").innerHTML = "$0";
}

//Realiza calculo para saber precio de la base de tortas
function calc_baseTortas(logo){
    if (logo){
        if (diametro == 15)
            precio = 550;
        else if (diametro == 20)
            precio = 800;
        else if (diametro == 25)
            precio = 1250;
        else if (diametro == 30)
            precio = 1450;
        else if (diametro == 35)
            precio = 1750;
        else if (diametro == 40)
            precio = 2100;
        else if (diametro == 45)
            precio = 2350;
        else if (diametro == 50)
            precio = 2650;
    }
    else {
        if (diametro == 15)
            precio = 400;
        else if (diametro == 20)
            precio = 700;
        else if (diametro == 25)
            precio = 1000;
        else if (diametro == 30)
            precio = 1300;
        else if (diametro == 35)
            precio = 1500;
        else if (diametro == 40)
            precio = 1750;
        else if (diametro == 45)
            precio = 2050;
        else if (diametro == 50)
            precio = 2300;
    }
}

function calc_mantequilla(){
    if(cantidad <= 25)
        precio = 0.12;
    else if(cantidad <= 50)
        precio = 0.11;
    else
        precio = 0.10;
}
function calc_ecoCuero(){
    if(cantidad <= 25)
        precio = 32;
    else if(cantidad <= 50)
        precio = 30;
    else
        precio = 28;
}
function calc_espiga(){
    if(cantidad <= 25)
        precio = 18.333;
    else if(cantidad <= 50)
        precio = 18.333;
    else
        precio = 13.333;
}