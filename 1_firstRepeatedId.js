const giftIds = [2, 1, 3, 5, 3, 2]; 

function firstRepeatedId(gifts) {
    const indexs = [];
    for (let i = 0; i < gifts.length; i++) {
        for (let j = i+1; j < gifts.length; j++) {
            // console.log(`${gifts[i]} == ${gifts[j]} => ${gifts[i] == gifts[j]}`);
            if (gifts[i] == gifts[j]) {
                indexs.push(j);
            }
        }
    }

    const minIndex = Math.min(...indexs); 
      if (minIndex == Infinity) {
        return -1;
      } else {
        return gifts[minIndex];
      }

   
}



const x = firstRepeatedId(giftIds);
console.log(x);


// mejorado por chatGpt
// Array de identificadores de regalos
const giftIds2 = [2, 1, 3, 5, 3, 2];

// Función que encuentra el primer regalo repetido en el array
function firstRepeatedId(gifts) {
    // Mapa para almacenar los índices de los regalos que ya hemos visto
    const indexMap = new Map();

    // Itera a través de los regalos
    for (let i = 0; i < gifts.length; i++) {
        // Obtiene el identificador del regalo actual
        console.log(indexMap);
        const gift = gifts[i];

        // Verifica si ya hemos visto este regalo
        if (indexMap.has(gift)) {
            // Si sí, devuelve el identificador del regalo repetido
            return gift;
        }

        // Si no hemos visto el regalo, almacenamos su índice en el mapa
        indexMap.set(gift, i);
    }

    // Si no se encuentra ningún regalo repetido, devuelve -1
    return -1;
}

// Llama a la función con el array de identificadores de regalos y almacena el resultado
const result = firstRepeatedId(giftIds2);

// Imprime el resultado en la consola
console.log(result);
