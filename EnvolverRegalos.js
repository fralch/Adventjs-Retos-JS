/*
Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
 [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] 

 */

const gifts = ['cat', 'game', 'socks']; 
function wrapping(gifts) {
    const gifts_wrapped = []; 
    for (const key in gifts) {
        let gift = gifts[key];
        let wrapp = ""; 
        for(let i= 0; i < gift.length; i++){
            wrapp +="*"; 
        } 
        gift = `*${wrapp}*\n*${gift}*\n*${wrapp}*`
        gifts_wrapped.push(gift); 
    }
    return gifts_wrapped; 
}

const x = wrapping(gifts); 
console.log(x); 

// repeat method : es un metodo que repite un string n veces.
// const str = 'hello';
// console.log(str.repeat(2)); // hellohello

/* 
function wrapGift(gift) {
  const wrapper = '*'.repeat(gift.length + 4); // Create the wrapper line with '*' on both sides
  return `${wrapper}\n*  ${gift}  *\n${wrapper}`;
}

*/