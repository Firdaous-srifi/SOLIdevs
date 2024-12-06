const numbers = [6,2,1,4,100];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}

console.log("la somme des elements pairs sont : ", sum);

// li hiya 112
