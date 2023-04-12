// Precios
var p_papelMantequilla = 0.12;
var p_ecoCuero = 32;
var p_cintaEspiga = 18.333;
//Variables modificables
var cantidad;
var diametro;
var precio;
var p_baseTortas;

//Insertar input a clase ingreso
var ingresoClassArray = document.getElementsByClassName("ingreso");
for (let i = 0; i < ingresoClassArray.length; i++)
    ingresoClassArray[i].addEventListener("input", calcular)

//Se inicia calculadora 
function calcular(){
    
    let producto = document.querySelector("#producto").value;
    let alto = document.querySelector("#alto").value;
    let ancho = document.querySelector("#ancho").value;
    cantidad = document.querySelector("#cantidad").value;
    let withLogo = document.querySelector("#logo").checked;
    diametro = document.querySelector("#diametro").value;
    let result;

    //Ajustar precio acorde a producto seleccionado
    if (producto == "mantequilla")
        CalcMantequilla();
    else if (producto == "ecoCuero")
        CalcEcoCuero();
    else if (producto == "cintaEspiga")
        CalcEspiga();
    
    // Si es base de tortas se ocultan clases no ocupadas y se añaden nuevas, Se calcula resultado con el parámetro dimension
    if(producto == "baseTortas"){
        let mostrar = document.querySelectorAll("#uno, #dos")
        for(let i = 0; i < mostrar.length; i ++){
            mostrar[i].classList.add("hide");
            mostrar[i].classList.remove("show");
        }

        let mostrar2 = document.querySelectorAll("#tres, #cuatro")
        for(let i = 0; i < mostrar.length; i ++){
            mostrar2[i].classList.remove("hide");
            mostrar2[i].classList.add("show");
        }
        calculoBaseTortas(withLogo);
        result = cantidad * p_baseTortas;
    }
    else {
        let mostrar = document.querySelectorAll("#uno, #dos")
        for(let i = 0; i < mostrar.length; i ++){
            mostrar[i].classList.remove("hide");
            mostrar[i].classList.add("show");
        }
        
        let mostrar2 = document.querySelectorAll("#tres, #cuatro")
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
        document.querySelector("#resultado").innerHTML = "";
}

//Realiza calculo para saber precio de la base de tortas
function calculoBaseTortas(logo){
    if (logo){
        if (diametro == 15)
            p_baseTortas = 550;
        else if (diametro == 20)
            p_baseTortas = 800;
        else if (diametro == 25)
            p_baseTortas = 1250;
        else if (diametro == 30)
            p_baseTortas = 1450;
        else if (diametro == 35)
            p_baseTortas = 1750;
        else if (diametro == 40)
            p_baseTortas = 2100;
        else if (diametro == 45)
            p_baseTortas = 2350;
        else if (diametro == 50)
            p_baseTortas = 2650;
    }
    else {
        if (diametro == 15)
            p_baseTortas = 400;
        else if (diametro == 20)
            p_baseTortas = 700;
        else if (diametro == 25)
            p_baseTortas = 1000;
        else if (diametro == 30)
            p_baseTortas = 1300;
        else if (diametro == 35)
            p_baseTortas = 1500;
        else if (diametro == 40)
            p_baseTortas = 1750;
        else if (diametro == 45)
            p_baseTortas = 2050;
        else if (diametro == 50)
            p_baseTortas = 2300;
    }
}

function CalcMantequilla(){
    if(cantidad <= 25)
        precio = 0.12;
    else if(cantidad <= 50)
        precio = 0.11;
    else
        precio = 0.10;
}
function CalcEcoCuero(){
    if(cantidad <= 25)
        precio = 32;
    else if(cantidad <= 50)
        precio = 30;
    else
        precio = 28;
}
function CalcEspiga(){
    if(cantidad <= 25)
        precio = 18.333;
    else if(cantidad <= 50)
        precio = 18.333;
    else
        precio = 13.333;
}