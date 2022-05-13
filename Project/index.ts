function* g1() {
  yield* g2();
  return "1";
}

function* g2() {
  yield* [1, 2, 34];
  return "3";
}
function* g() {
  yield* g1();
}
let iterator = g();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
