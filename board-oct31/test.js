// let text = "";

// for (let i = 0; i < 11; i++) {
//   text += i + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

let n = 5; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += j;
  }
  string += "\n";
}
document,getElementByID(demo1).innerHTML = string;
