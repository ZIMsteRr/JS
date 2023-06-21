for (let i = 10; i <= 20; i++) {
    if (i < 20) {
      console.log(i + ',');
    } else {
      console.log(i);
    }
}


for (let i = 10; i <= 20; i++) {
    if (i === 15) {
      continue;
    }
    console.log(i * i);
}


for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(`7 * ${i} = ${7 * i}`);
}



let res = 0;

for (let i = 1; i <= 15; i++) {
    res += i;
  
}

console.log(res);



let result = BigInt(1);

for (let i = BigInt(15); i <= BigInt(35); i++) {
result *= i;
}

console.log(result);



let sum = 0;
const count = 500;

for (let i = 1; i <= count; i++) {
  sum += i;
}

const average = sum / count;

console.log(average);