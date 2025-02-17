const prompt = require('prompt-sync')()

let a = parseFloat(prompt('valor de A: '))
let b = parseFloat(prompt('valor de B: '))
let c = parseFloat(prompt('valor de C: '))

let xI = 0
let xII = 0

if (a == 0){
    a = 1
}
if (b == 0){
    b = 1
}


let delta = (b * b) - (4 * a * c)
let raiz = Math.sqrt(delta)

console.log(`raiz de delta: ${raiz}`)

if (delta == 0){

    xI = ( - b ) / (2 * a)
    console.log(`valor de XI: ${xI}`)
}
else if (delta > 0){

    xI = ( - b + raiz) / (2 * a)
    xII = ( - b - raiz) / (2 * a)

    console.log(`valor XI: ${xI}, valor XII: ${xII}`)
}
else {
    console.log("nao existe raiz real !!")
}