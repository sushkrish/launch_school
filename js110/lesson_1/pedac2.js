/**
 * Leftover Blocks
 * Input: integer # blocks, assuming non-negative.
 * Output: integer #leftover blocks after building tallest structure
 * 
 * Explicit Rules:
 * - each block is a cube (all sides equal)
 * - top layer is 1 block
 * - 1 block must have 4 supporting blocks (makes all sides of base equal)
 * - can't have holes
 * - goal is to build tallest structure with given blocks
 * 
 * Implicit Rules:
 * - integer number of blocks
 * - block is placed at the intersection of 4 blocks in previous layer
 * - lower layer block can support upto 4 upper layer blocks on it
 * - Layer N from the top has N**2 blocks
 * 
 * Questions:
 * - Can there be extra blocks in lower layer? (i.e no leftover blocks) 
 *    No, based on test cases.
 * 
 * Data structures: None needed.
 */
function calculateLeftoverBlocks(numBlocks) {
  //keep track of currentLayer, starting with layer 1 at top.
  let currentLayer = 1;

  //Check if there are enough blocks left for the currentLayer. layerBlocks = (currentLayer**2). 
  while (numBlocks >= currentLayer ** 2) {
    //If yes, subtract layerBlocks from numBlocks, increment currentLayer by 1. Repeat.
    numBlocks -= (currentLayer ** 2);
    currentLayer += 1;
  }

   //If not, return numBlocks as the leftover number of blocks.
   return numBlocks;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true