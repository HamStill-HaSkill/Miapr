const x = (i, N) =>{
 return 100 * Math.cos(2 * Math.PI * 20 * i / N - Math.PI / 4);
}
const cosA = (N, j) => {
  let sum = 0;
  for (let i = 0; i < N - 1; i++) {
    sum += x(i, N) * Math.cos(2 * Math.PI * j * i / N);
  }
  return 2 / N * sum;
}

const sinA = (N, j) => {
  let sum = 0;
  for (let i = 0; i < N - 1; i++) {
    sum += x(i, N) * Math.sin(2 * Math.PI * j * i / N);
  }
  return 2 / N * sum;
}

const A = (cosA, sinA) => {
  return Math.sqrt(cosA * cosA + sinA * sinA);
}

const fi = (cosA, sinA) => {
  return Math.atan(sinA/cosA);
}

export { cosA, sinA, A, fi };