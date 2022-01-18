// Código del cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado) {

    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();



// Código del triángulo

console.group("Triangulo");

function perimetroTriangulo(lado1,lado2,base) {

    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {

    return ( base * altura) / 2;
}

console.groupEnd();



// Código del Circulo

console.group("Circulo");


function diamentroCirculo (radio){
    return radio * 2;
}

// PI

const PI = Math.PI;
console.log ("El PI es: " + PI );


//Circunferencia

function perimetroCirculo (radio){
    const diametro = diamentroCirculo(radio);
    return diametro * PI;
}



//área

function areaCirculo (radio){
    
    return (radio* radio) * PI;
}

console.groupEnd();


//Aquí interactuamos con el HTML

//****CUADRADO******/

function calcularPerimetroCuadrado(){
    
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//*******TRIANGULO***********
function calcularPerimetroTriangulo(){
    
    const ladoA = Number(document.getElementById("ladoA").value),
          ladoB = Number (document.getElementById("ladoB").value),
          base = Number (document.getElementById("base").value),
          perimetro = perimetroTriangulo(ladoA,ladoB,base);
    alert (`El perimetro es: ${perimetro} cm`);
}


function calcularAreaTriangulo(){
    
    const altura = Number(document.getElementById("altura").value),
          base = Number (document.getElementById("base").value),
          perimetro = areaTriangulo(altura,base);
    alert (`El area del triangulo  es: ${perimetro} cm`);
}


// function calcularPerimetroTriangulo(){
//     const input1 = document.getElementById("InputTriangulo1");
//     const value1 = Number(input1.value);
//     const input2 = document.getElementById("InputTriangulo2");
//     const value2 = Number(input2.value);
//     const base = document.getElementById("InputBaseTriangulo");
//     const value3 = Number(base.value);
//     const perimetro = perimetroTriangulo(value1,value2,value3);
//     alert("El perimetro del triangulo es: " + perimetro);
// }