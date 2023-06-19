const names = [0, 1, 2, 3];
const arr = ["a", "b", "c"];

const filterFunc = (x) => {
  return x > 1;
};
const consoleFunc = (x) => {
  console.log(x);
};
const mapFunc = (x) => {
  return x + 1;
};

const reduceFunc = (x, y) => x + y;

/* Array.prototype.myForEach = function (callback) {
for(let i=0; i<this.length; i++ ){
callback (this[i])
}
} */

/* Array.prototype.myMap = function (callback) {
let result = [];
  for (let i=0; i<this.length;i++){
    result.push(callback(this[i]))
  }
  return result;
} */

/* Array.prototype.myFilter = function (callback){
let result = []
for(let i=0;i<this.length; i++){
  if(callback(this[i]))
    result.push(this[i])
  }
  return result;
} */

Array.prototype.myReduce = function (callback, initialValue) {
  let previousValue = initialValue;
  if (this.length === 0) {
    return new TypeError("Array empty is called on reduce");
  }
  for (let i = previousValue ? 0 : 1; i < this.length; i++) {
    previousValue = callback(
      previousValue ? previousValue : this[0],
      this[i],
      i,
      this
    );
  }
  return previousValue;
};

const mapped = names.myReduce(reduceFunc);
console.log(mapped);
