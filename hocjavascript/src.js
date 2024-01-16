// bài 1
console.log("hello world!");
alert("hello world!");

//bài 2
let a = 5.5;
const x = 5;
console.log(`hello world! with 'hello world' with"hello world"`, x);

//bài 3
let test = "i am string";
console.log("hello world with", test);

console.log(5 + 4 + "a");
console.log("a " + 5 + 4);

//bài 4
let newtest = test.slice(0, 5);
console.log("hello world with", newtest);

// bài 6
console.log("hello world from string".toLocaleUpperCase());
let b = 5;
let c = 6;
let d = 6.9;
let e = "5";
console.log(a + b);
console.log(c + d);
console.log(b === e);
console.log(b - e);
console.log(b * e);
console.log(b / e);

//bài 7
console.log("hello world with " + (b + c) + "and/nnot " + (2 + b + c));
console.log(`hoi dan it check string: b = ${b}`);

//bài 8
let f = {};
let g = "eirc";
console.log("type of f: ", typeof f);
let h = {
  name: "mannnn",
  address: "tra vinh",
  sdt: {
    sdt1: "00011",
    sdt2: "00012",
  },
  func: function () {
    console.log("hello guys with object");
    return;
  },
};
h.g = "mannnnnnnnn";
console.log("h: ", h);
console.log("h name: ", h.func());
tetsfunc = (tsst) => {
  console.log("hello guys,", tsst);
  return;
};

console.log("func ", tetsfunc(g));

//bài 9
let cc = ["a", "f"];
console.log(cc);

let family = [
  { name: "linh", age: 25 },
  { name: "nhung", age: 30 },
];

console.log(family);

//bài 10

for (let i = 0; i < family.length; i++) {
  console.log("i = ", family[i]);
}

for (i in family) {
  console.log("string: ", family[i]);
}

//bài 11
let j = 0;
while (j < family.length) {
  console.log("j: ", family[j]);
  j++;
}

let jj = 0;
do {
  console.log("jj:", family[jj]);
  jj++;
} while (jj < family.length);

//bài 12
if (b < c) {
  console.log(c);
} else {
  console.log(b);
}

//bài 13
tong = (a, b) => {
  return a + b;
};

console.log("tong: ", tong(4, 5));

//bài 14
testFunc = (x, y) => {
  c = x + y;
  return c;
};
console.log("testFunc: ", testFunc(4, 54));

//bài 15

testFuncArrow = (x, y) => {
  console.log("test arrow function =)))");
  console.log("test arrow function =)))");
  return x + y;
};

console.log(testFuncArrow(3, 4));
