import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1._name);
c1._name = "Python 101";
console.log(c1);

try {
  c1._name = 12;
} catch (err) {
  console.log(err);
}

try {
  const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
} catch (err) {
  console.log(err);
}
