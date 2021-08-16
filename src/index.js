module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.join('').replace(/,/g, '')
  
  let stack = []
  for (let bracket of str) {
      let bracketsInd = brackets.indexOf(bracket)

      if (bracketsInd % 2 === 0) {
                
        if (bracket === brackets[bracketsInd + 1] && stack[stack.length - 1] === bracketsInd){
            stack.pop();
        } else if (bracket === brackets[bracketsInd + 1] && stack[stack.length - 1] !== bracketsInd) {
            stack.push(bracketsInd)
        }
        else{
            stack.push(bracketsInd)
        }
    } 
    else {
        if (stack.pop() !== bracketsInd-1){
            return false
        }
    }
    
}
return stack.length === 0
}
