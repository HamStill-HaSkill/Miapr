const getHarmonicSignalFunction = (A, f, fi, N) => {
  let xArray = []

  for (let n = 0; n < N; n++)
    xArray.push(A * Math.sin((2 * Math.PI * f * n) / N + fi));

  return xArray;
}

const getPolyharmonicSignalFunction = (A, fi, N) => {
  let xArray = []
  for (let i = 0; i < 5; i++) {
    for (let n = 0; n < N; n++) {
      let sum = 0;
      for (let f = 1; f < 6; f++)
        sum += A * Math.sin((2 * Math.PI * f * n) / N + fi[f - 1]);
      xArray.push(sum);
    }
  }

  return xArray;
}

const getPolyharmonicSignalFunctionLine = (_counters) => 
  {
    var signal = [];

    let frequency = 1;
    let startPhases = Math.PI / 4;
    let amplitude = 3;

    for (let i = 0; i < 5; i++) {
      for (let step = 0; step < _counters[i]; step++) {
        let res = 0;
        for (var k = 0; k < 5; k++) {
          res += amplitude * Math.sin((2 * Math.PI * (frequency + k) * step) / _counters[i] + startPhases);
        }
        signal.push(res);
      }
      frequency *= 0.8;
      startPhases *= 0.8;
      amplitude *= 0.8;
    }

    return signal;
  }

  export { getHarmonicSignalFunction, getPolyharmonicSignalFunction, getPolyharmonicSignalFunctionLine };