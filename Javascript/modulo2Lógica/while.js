
function random(min, max) {
  const r = Math.floor(Math.random() * (max - min) + min);
  return r;
}

let min = 1;
let max = 50
let rand = random(min, max);

while (rand !== 30) {
  rand = random(min, max);
  console.log(rand);
}

// do {
//   rand = random(min, max);
//   console.log(rand);
// } while (rand !== 30)