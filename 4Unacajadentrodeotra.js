const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ] // false
 

// como puedo saber si una caja cabe dentro de otra caja  los valores de las cajas son l = largo, w = ancho, h = alto
// si una caja cabe dentro de otra caja entonces es true de lo contrario es false se puede cambiar el orden de las cajas o objetos


const fitsInOneBox = (boxes) => {    
    let result = false; 

    for (let i = 0; i < boxes.length; i++) {
      if(boxes[i+1] !== undefined){
        if (boxes[i].l < boxes[i+1]?.l && boxes[i].w < boxes[i+1]?.w && boxes[i].h < boxes[i+1]?.h) {
          result = true;
        } else {
           result = false;
       }
      }
      
    }
   
}

  
  // TEST CASES
  // fitsInOneBox(boxes)
  console.log(fitsInOneBox(boxes)) // false