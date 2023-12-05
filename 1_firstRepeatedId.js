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