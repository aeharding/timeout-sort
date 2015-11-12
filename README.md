# timeout-sort

Timeout sort is an asynchronous integer sorting algorithm. It can sort all integers (+ & -) with O(max(abs(input))+n).

```js
var timeoutSort = require("timeout-sort");

// callback form
timeoutSort([5, 20, 642, -80], function cbSort(sortedArray, err) {
  if (err) console.log("You suck!");
  console.log(sortedArray);
});

// promise form
timeoutSort([5, 20, 642, -80]).then(function resolvedWithSort(sortedArray) {
  console.log(sortedArray);
});
```

## Development

`npm install -g mocha coffee-script`

then

`npm start` (to compile)

`npm test`
