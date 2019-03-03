module.exports = function getZerosCount(number) {
  let count = 0;
  for (let i = 5; i < number + 1; i = i + 5) {
      if (i % 5 === 0) {
          count++;
          if ((i / 5) % 5 === 0) {
              let Nod = i / 5;
              while (Nod > 1) {
                  if (Nod % 5 === 0) {
                      count++;
                      Nod = (Nod / 5) >> 0;
                  } else {
                      Nod = 0;
                  }
              }
          }
      }
  }
  return count;
}
