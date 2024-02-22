/*
### **Calcular pagos en cuotas sobre un monto determinado**

---

Ingrese el monto por teclado.

Ofrecer pago en cuotas o en efectivo.

Si elige pago en cuotas, según la cantidad de cuotas, agregarle un porcentaje de recargo a ese monto.

Informarle al usuario en cuánto quedan las cuotas y el precio final del producto con recargo.

Si elige pago en efectivo, informarle el monto sin modificaciones. (le voy a hacer descuento)

###
*/

// Recibe un string del prompt y devuelve un numero >0 para el calculo de las cuotas. Devuelve -1 si es no es un numero valido o es un numero negativo.
const validarNumero = (entrada) => {
    let entradaN = Number(entrada)
    if (isNaN(entradaN)){
        alert("Ingrese un numero valido")
        return -1
    }else{
        if (entradaN < 0){
            alert("Ingrese un numero mayor a 0")
            return -1
        }else if(entradaN ==0){
            return 0
        }else{
            alert("El monto es: " + entradaN)
            return entradaN
        }
    }
}
/*Intereses de cuotas, lo defino como variables globales*/
const interes2Cuotas = 10
const interes3Cuotas = 12
const interes6Cuotas = 15
const interes9Cuotas = 20
const interes12Cuotas = 30

//Calcula el monto de la cuotas
const calcularCuotas = (monto, cantidadCuotas, interes) => {
    let recargo = monto * (interes/100)
    let montoFinal = monto + recargo
    return montoFinal / cantidadCuotas;
}
//Muestra el resultado de al cuota ingresada en pnatalla
const mostrarCuota = (monto, cantidadCuotas) => {
    let cuota = 0
    if (cantidadCuotas == 2){
        cuota = calcularCuotas(monto, cantidadCuotas, interes2Cuotas)
    }else if (cantidadCuotas == 3){
        cuota = calcularCuotas(monto, cantidadCuotas, interes3Cuotas)
    }else if (cantidadCuotas == 6){
        cuota = calcularCuotas(monto, cantidadCuotas, interes6Cuotas)
    }else if (cantidadCuotas == 9){
        cuota = calcularCuotas(monto, cantidadCuotas, interes9Cuotas)
    }else if (cantidadCuotas == 12){
        cuota = calcularCuotas(monto, cantidadCuotas, interes12Cuotas)
    }
    let regargo = cuota * cantidadCuotas - monto
    alert("El precio de cada una de las " +cantidadCuotas +" cuotas es: " + cuota.toFixed(2) + "\nEl precio con original es: " +monto+"\nEl recargo es de: "+ regargo.toFixed(2)+"\nEl precio con recargo es: "+(monto+regargo).toFixed(2))
}

//Muestra el resultado de pagar en efectivo con su descuento
const mostrarEfectivo = (monto) => {
    descuento = monto * (15/100)
    alert("El precio en efectivo es: " + monto +"\n El descuento es de: " + descuento.toFixed(2) +"\n El precio con descuento es: " + (monto-descuento).toFixed(2)) 

}
/*
    Se pregunta si paga en cuotas se hace el calculo necesario
    Si no, se hace el calculo en efectivo.
*/
const pedirTipoDePago = (monto) => {
    let opcion
    do{
        opcion = prompt("Ingrese el tipo de pago \n 1. Cuotas \n 2. Efectivo")
        opcion = Number(opcion)
        if (opcion == 1){
            alert("El tipo de pago es cuotas")
            let cantidadCuotas = Number(prompt("Ingrese la cantidad de cuotas\nLas opciones disponibles son en 2, 3, 6, 9 y 12 cuotas con interes"))
            while(cantidadCuotas != 2 && cantidadCuotas != 3 && cantidadCuotas != 6 && cantidadCuotas != 9 && cantidadCuotas != 12){
                alert("Ingrese una cantidad de cuotas valida")
                cantidadCuotas = Number(prompt("Ingrese la cantidad de cuotas\nLas opciones disponibles son en 2, 3, 6, 9 y 12 cuotas con interes"))
            }
            mostrarCuota(monto, cantidadCuotas)
        }else if (opcion == 2){
            alert("El tipo de pago es efectivo")
            mostrarEfectivo(entrada)
        }else{
            alert("Ingrese una opcion valida")
        }
    }while(opcion != 1 && opcion != 2)
}
/*
    Ciclo principal donde se pide ingresar el numero a pagar
*/
let entrada = ""
do{
    entrada = prompt("Bienvenidos al sistema de calculos de cuotar \n Ingrese el monto para pagar (0 para salir)")
    entrada = validarNumero(entrada)
    if (entrada > 0){
        pedirTipoDePago(entrada)
    }
}while(entrada != 0)


