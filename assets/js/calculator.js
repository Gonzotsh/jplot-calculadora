function sumar(){
    let alto = document.querySelector("#alto").value;
    let ancho = document.querySelector("#ancho").value;
    let cantidad = document.querySelector("#cantidad").value;

    let result = alto * ancho * cantidad;

    alert(result);
}