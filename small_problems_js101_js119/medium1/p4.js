function minilang(program) {
  //init register, stack
  let register = 0;
  let stack = [];

  //iterate through array with program commands
  program.split(' ').forEach(command => {
    //for each command, take required action  
    if (command === 'PUSH') {
      stack.push(register);
    } else if (command === 'ADD') {
      register += stack.pop();
    } else if (command === 'SUB') {
      register -= stack.pop();
    } else if (command === 'MULT') {
      register *= stack.pop();
    } else if (command === 'DIV') {
      register = parseInt(register / stack.pop());
    } else if (command === 'REMAINDER') {
      register = parseInt(register % stack.pop());
    } else if (command === 'POP') {
      register = stack.pop();
    } else if (command === 'PRINT') {
      console.log(register);
    } else {
      register = Number(command);
    }
  });
}


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)