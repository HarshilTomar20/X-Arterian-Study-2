let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

// High order functions => Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

function unless(test, then) {
if (!test) then();
}

repeat(3, n => {
unless(n % 2 == 1, () => {
    console.log(n, "is even");
});
});
// → 0 is even
// → 2 is even

["A", "B"].forEach(l => console.log(l));


function sum(array) {
    for(let i=1; i<array.length; i++) {
        arr[i] = arr[i-1] + arr[i];
    }

    return arr[arr[array.length-1]];
}

function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

// Assignment

// Flattening

function faltten () {}

const SCRIPTS = [
    {
      name: 'Afrikaans',
      living: true,
      direction: 'ltr',
      year: 1806,
      url: 'https://en.wikipedia.org/wiki/Afrikaans_language',
      nativeWriters: 7000000
    },
    {
      name: 'Arabic',
      living: true,
      direction: 'rtl',
      year: -500,
      url: 'https://en.wikipedia.org/wiki/Arabic_language',
      nativeWriters: 274000000
    },
    {
      name: 'Ancient Greek',
      living: false,
      direction: 'ltr',
      year: -800,
      url: 'https://en.wikipedia.org/wiki/Ancient_Greek_language',
      nativeWriters: 0
    },
    {
      name: 'Braille',
      living: true,
      direction: 'tty',
      year: 1824,
      url: 'https://en.wikipedia.org/wiki/Braille',
      nativeWriters: 0
    },
    {
      name: 'Chinese',
      living: true,
      direction: 'ltr',
      year: -1000,
      url: 'https://en.wikipedia.org/wiki/Chinese_language',
      nativeWriters: 1197000000
    },
    {
      name: 'Devanagari',
      living: true,
      direction: 'ltr',
      year: 100,
      url: 'https://en.wikipedia.org/wiki/Devanagari',
      nativeWriters: 300000000
    }
];

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}
  
console.log(filter(SCRIPTS, script => script.living));