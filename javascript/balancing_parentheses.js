function balancingParentheses(string) {
  //  initalize missing to 0 (will store unmatched closing parens count)
  let missing = 0;
  //  initalize openings to 0 (will store the parens count)
  let openings = 0;

  //  iterate over sting
  for (let i = 0; i < string.length; ++i){
    //  if char == "("
    if (string[i] === "(") {
      // increment openings
      ++openings;
      continue;
    }
    
    if (openings > 0) {
      --openings;
    } else {
      // if openings is 0
      // increment missing
      ++missing;
    }
  }

  return missing + openings;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));

  console.log("");

  console.log("Expecting: 0");
  console.log(balancingParentheses('()'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses('('));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses(')('));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')()'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses(')((((()))((())))()(()))('));

  console.log("");

  console.log("Expecting: 3");
  console.log(balancingParentheses(')))'));

  console.log("");

  console.log("Expecting: 3");
  console.log(balancingParentheses('((('));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// the length of the string needs to be at least one
// check each line and determine
// And a written explanation of your solution
