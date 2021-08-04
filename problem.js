// Given a square grid of characters in the range ascii[a-z], 
// rearrange elements of each row alphabetically, ascending. 
// Determine if the columns are also in ascending alphabetical order, top to bottom. 
// Return YES if they are or NO if they are not.

// Example
// grid = ["abc", "ade", "efg"];
// a b c
// a d e
// e f g

// The rows are already in alphabetical order. 
// The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES. 
// Only elements within the same row can be rearranged. They cannot be moved to a different row.


function asc_col(arr){
  const arr_sorted = arr.map(item => item.split('').sort().join(''))
  var arr_l = arr.length
  let result = "YES"
  let col_word=""
  let word=""
  for(let j=0; j<arr_l; j++){
    for(let k=0; k<arr_l; k++){
      word = arr_sorted[k]
      col_word = col_word + word.slice(j, j+1)
    }
    if(col_word.split('').sort().join('')!==col_word){
      result="NO"
      break;
    }
    col_word=""
  }
  return result
}

//TIME complexity = o(n^2)
//SPACE complexity = o(1)

module.exports = asc_col