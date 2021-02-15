
exports.min = function min (array) {
  if (array == 0 || array === undefined) {
    return 0
  } else {
    return array.reduce((p, v) => {
      return ( p < v ? p : v)
    }, 0);
  }
}

exports.max = function max (array) {
  if (array == 0 || array === undefined) {
    return 0
  } else {
    return array.reduce((p, v) => {
      return ( p > v ? p : v)
    }, 0)
  }
}

exports.avg = function avg (array) {
  if (array == 0 || array === undefined) {
    return 0
  } else { 
    const sum = array.reduce((a, b) => a + b, 0);
    const avg = (sum / array.length) || 0;
    return avg;
  }
}
