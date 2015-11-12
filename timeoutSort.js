var timeoutSort;

export function timeoutSort(arr, cb) {
  var fn, i, len, longest, ret, t;
  ret = [];
  longest = 0;
  fn = function() {
    var tmp;
    if (t > longest) {
      longest = t;
    }
    tmp = t;
    return setTimeout(function() {
      return ret.push(tmp);
    }, t);
  };
  for (i = 0, len = arr.length; i < len; i++) {
    t = arr[i];
    fn();
  }
  setTimeout((function() {
    return typeof cb === "function" ? cb(ret) : void 0;
  }), longest);
};