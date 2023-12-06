function stringToBrainfuck(input) {
    const output = [];
    const charCodeArray = input.split('').map(char => char.charCodeAt(0));
  
    // Convert each character in the input string to Brainfuck syntax
    for (let i = 0; i < charCodeArray.length; i++) {
      const charCode = charCodeArray[i];
      console.log(charCode)

      // Set the current cell to the ASCII code of the character
      for (let j = 0; j < charCode; j++) {
        output.push('+');
      }
  
      // Print the character
      output.push('.');
  
      // Move to the next cell
      if (i < charCodeArray.length - 1) {
        output.push('>');
      }
    }
  
    return output.join('');
  }
  
  // Example usage
  const inputString = "Hello World";
  const brainfuckCode = stringToBrainfuck(inputString);
  console.log(brainfuckCode);
  