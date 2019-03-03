class ZeroCount {
  constructor(number, base) {
    let nok = this.getNOK(base);
    let maxNok = Math.max.apply(null, nok);
    let diff = nok.filter(function(item) {
      return item === maxNok;
    }).length;
    let fact = this.factorial(number, maxNok);
    this.result = (fact / diff) >> 0;
  }

  factorial(n, a) {
    let count = 0;
    for (let i = a; i < n + 1; i = i + a) {
      if (i % a === 0) {
        count++;
        if ((i / a) % a === 0) {
          let N = i / a;
          let D = a;
          while (N > 1) {
            if (N % D === 0) {
              count++;
              N = (N / D) >> 0;
            } else {
              N = 0;
            }
          }
        }
      }
    }
    return count;
  }

  getNOK(num) {
    let j = 0;
    let i = 2;
    let a = [];
    do {
      if (num % i === 0) {
        a[j] = i;
        j++;
        num = num / i;
      } else i++;
    } while (i < num);
    a[j] = i;

    return a;
  }

  getResult() {
    return this.result;
  }
}

module.exports = function getZerosCount(number, base) {
  return new ZeroCount(number, base).getResult();
};
