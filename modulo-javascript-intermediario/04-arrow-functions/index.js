
// função anônima
let somarAnomima = function(numero1, numero2){
    return numero1 + numero2
}
console.log(somarAnomima(1, 1));

// Arrow function
let somarArrow = (numero1, numero2)=>{
    return numero1 + numero2
}
console.log(somarArrow(2, 2));

// // Arrow function concisa
let somarArrowConcisa = (numero1, numero2)=>numero1 + numero2
console.log(somarArrowConcisa(3, 3));