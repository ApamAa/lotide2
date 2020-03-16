const middle = function(arr) {
  let mid = Math.floor((arr.length - 1) / 2);
  let miane = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      miane = arr.slice(mid, mid + 2);
    } else {
      miane = arr[mid];
    }
  }
  return miane;
};

module.exports = middle;

console.log(middle([1, 4, 3, 5, 6, 7]));
