// run command node shapes

// kvadrat

const kvadrat = (value: number) => {
  const count = Math.pow(value, 2);
  return count;
};

console.log(kvadrat(5));

// to'rtburchak

const tortburchak = (width: number, height: number) => {
  var count = width * height;
  return count;
};

console.log(tortburchak(4, 3));

// doira

const π: number = 3.14;
const doira = (el: number) => {
  var count = el * π;
  return count;
};

console.log(doira(4));
