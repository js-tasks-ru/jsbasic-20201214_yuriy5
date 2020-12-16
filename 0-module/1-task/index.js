/**
 * sum
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
function sum(m = 0, n = 0) {
  let total, symbolsAfterPoint;
  symbolsAfterPoint = 0;   

  if((Number.isInteger(m) && Number.isInteger(n)) != true){  // check for fractional numbers

    let nonInteger1, nonInteger2;
    nonInteger1 = nonInteger2 = 0;

    if(Number.isInteger(m) != true){
      nonInteger1 = (m.toString().length) - (m.toString().lastIndexOf('.') + 1);
    }

    if(Number.isInteger(n) != true){
      nonInteger2 = (n.toString().length) - (n.toString().lastIndexOf('.') + 1);
    }

    symbolsAfterPoint = Math.max(nonInteger1,nonInteger2);  
  }

  if(symbolsAfterPoint == 0){
    total = m + n;
  } 
  else{
    total = +(m + n).toFixed(symbolsAfterPoint); 
  }

  return total;

}
