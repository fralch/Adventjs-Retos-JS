const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ] // false
  const boxes2 = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]// true


  

function fitsInOneBox(obj) {
    obj.forEach((caja, index)=>{
        // console.log(typeof caja); 
       let suma = sumar(caja); 
       console.log(suma); 
    }); 
}

function comparar(objeto1, objeto2) {
    let resultado = 0;
  
    for (const propiedad of Object.keys(objeto1)) {
      const valor1 = objeto1[propiedad];
      const valor2 = objeto2[propiedad];
  
      // Compara los valores de las propiedades correspondientes
      if (valor1 !== valor2) {
        // Las propiedades no son iguales
        resultado = valor1 < valor2 ? -1 : 1;
        break;
      }
    }
  
    if (resultado === 0) {
      // Los objetos son iguales
      resultado = 0;
    }
  
    return resultado;
  }

fitsInOneBox(boxes); 