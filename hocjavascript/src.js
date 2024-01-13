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
console.log("h: ", h);
console.log("h name: ", h.func());
tetsfunc = (tsst) => {
  console.log("hello guys,", tsst);
  return;
};

console.log("func ", tetsfunc(g));
