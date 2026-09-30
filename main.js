// import the native node module to read what is typed on the keyboard
const readline = require('readline');

// Create an interface to read input and write output
const rl = readline.createInterface({
  input: process.stdin, // Read input from standard input (keyboard)
  output: process.stdout // Write output to standard output (console)
});

console.log("¡Bienvenido a mi programa que ordena números! 🌚");

rl.question('Ingresa un número: ', (num1) => {
  rl.question('Ingresa otro número: ', (num2) => {
    rl.question('Ingresa un último número: ', (num3) => {
      let a = Number(num1);
      let b = Number(num2);
      let c = Number(num3);

      let temp = 0;

      if (a < b) {
        temp = a;
        a = b;
        b = temp;
      }

      if (a < c) {
        temp = a;
        a = c;
        c = temp;
      }

      if (b < c) {
        temp = b;
        b = c;
        c = temp
      }

      if (a === b && b === c) {
        console.log('Los tres números son iguales');
      }

      console.log(a, b, c);
      console.log(c, b, a);
      rl.close();
    });
  });
});
