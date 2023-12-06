# Understanding Brainfuck Language

Brainfuck is an esoteric programming language created in 1993 by Urban Müller. It is known for its extreme minimalism. The language consists of only eight simple commands, a data pointer and an instruction pointer.

## Commands

Brainfuck has only eight commands:

- `>`: Increment the data pointer (to point to the next cell to the right).
- `<`: Decrement the data pointer (to point to the next cell to the left).
- `+`: Increment (increase by one) the byte at the data pointer.
- `-`: Decrement (decrease by one) the byte at the data pointer.
- `.`: Output the byte at the data pointer.
- `,`: Accept one byte of input, storing its value in the byte at the data pointer.
- `[`: If the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching `]` command.
- `]`: If the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching `[` command.

## Memory

Brainfuck operates on an array of memory cells, each initially set to zero. There is a movable data pointer which points to a current cell.

## Execution

The commands are executed sequentially, with some commands (`[` and `]`) causing the program counter to jump forward or backward in the code. The program continues executing until there are no more commands or an error occurs.

# String To Brainfuck

The `string-to-brainfuck.js` file contains a function `stringToBrainfuck` that converts a given string into Brainfuck code.

## How it works

The function `stringToBrainfuck` takes a string as input and returns a string of Brainfuck code that, when executed, will output the original input string.

Here's a step-by-step explanation of how it works:

1. The input string is split into an array of characters.
2. Each character is converted to its ASCII code.
3. For each ASCII code, the function generates Brainfuck code that increments the current memory cell by the ASCII code value. This is done by appending '+' to the output string for each value of the ASCII code.
4. The function then appends a '.' to the output string to print the character represented by the ASCII code in the current memory cell.
5. If there are more characters in the input string, the function appends a '>' to the output string to move the memory pointer to the next cell.
6. Finally, the function joins the array of Brainfuck commands into a single string and returns it.

## Example usage

Here's an example of how to use the `stringToBrainfuck` function:

```javascript
const inputString = "Hello World";
const brainfuckCode = stringToBrainfuck(inputString);
console.log(brainfuckCode);
This will output Brainfuck code that, when executed, will print "Hello World".
```

### Output
```
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>++++++++++++++++++++++++++++++++.>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
```
# generate-brainfuck-string
