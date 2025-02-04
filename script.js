var number = 8;
if (number > 0) {
  console.log('The number is positive');
} else if (number < 0) {
  console.log('The number is negative');
} else {
  console.log('The number is 0');
}


let day = 3;
switch (day) {
    case 1:
        console.log(Sunday)
        break;
    case 2:
        console.log(Monday)
        break;
    case 3:
        console.log(Tuesday)
        break;
    case 4:
        console.log(Wednesday)
        break;
    case 5:
        console.log(Thursday)
        break;
    case 6:
        console.log(Friday)
        break;
    case 7:
        console.log(Saturday)
        break;
}


let number = 5;
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

for (let i = 1; i <= 8; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
console.log("Loop exited at i=3");

for (let i = 1; i <= 12; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

let globalVar = 'I am global!';
function scopeExample() {
  let localVar = 'I am local!';
  console.log(globalVar);
  console.log(localVar);
}
scopeExample();