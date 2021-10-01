const getRandomPoints = (a, m, Rn) => {
  let randArray = []
  let Aperiod = 1;
  for (let i = 0; ; i++) {
    Rn = (a * Rn) % m;
    let num = Rn / m;
    if (randArray.includes(num)) {
      Aperiod += i 
      break;
    } 
    randArray.push(num);
  }
  return {points: randArray, aperiod: Aperiod};
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getGausePoints = (points, a, b) => {
  let mdev = parseInt(b);
  let expc = parseInt(a);
  let rand = [];
  for (let i = 0; i < points.length; i++)
  {
      let R = 0;
      for (let j = 0; j < 6; j++)
      {
          R += points[getRandomInt(points.length)];
      }
      
      let tmp = expc + mdev * 2**(0.5) * (R - 3);
      rand.push(tmp);
  }
  return rand;
}

const getUniformPoints = (points, a, b) => {
  a = parseFloat(a);
  b = parseFloat(b);
  let rand = [];
  points.forEach(e => {
    rand.push(a+(b-a)*e);
  });
  return rand;
}

const getTrianglePoints = (points, a, b) => {
  a = parseFloat(a);
  b = parseFloat(b);
  let rand = [];
  for (let i = 0; i < points.length; i++) {
        let R1 = points[getRandomInt(points.length)];
        let R2 = points[getRandomInt(points.length)];
        rand.push(a+(b-a)*Math.max(R1, R2));
  };
  return rand;
}

const getSimpsonPoints = (points, a, b) => {
  a = parseFloat(a);
  b = parseFloat(b);
  let rand = [];
  let points2 = [];

  points.forEach(e => {
    points2.push(a / 2 + (b / 2 - a / 2) * e);
  });

  for (let i = 0; i < points.length; i++) {
        let R1 = points2[getRandomInt(points.length)];
        let R2 = points2[getRandomInt(points.length)];
        rand.push(R1+R2);
  };
  return rand;
}


const getExponentPoints = (points, a) => {
  let lambda = parseFloat(a);
  let rand = [];
  points.forEach(e => {
    rand.push(Math.abs(Math.log(e)/lambda));
  });
  return rand;
}


const getGammaPoints = (points, a, b) => {
  let lambda = parseFloat(b);
  let eta = parseFloat(a);
  let rand = [];
  for (let i = 0; i < points.length; i++)
  {
      let R = 1;
      for (let j = 0; j < Math.floor(eta); j++)
      {
          R *= points[getRandomInt(points.length)];
      }
      let tmp = -Math.abs(Math.log(R)/lambda);
      rand.push(tmp);
  }
  return rand;
}

const getPointsForGistogram = (points) => {
  const k = 20;
  let m = points.length;
  points.sort(function(a,b) { return a - b;});
  let minPoint = points[0];
  let maxPoint = points[m-1];
  let rVar = maxPoint - minPoint;
  let delta = rVar / k;
  let nArray = (new Array(k)).fill(0);
  let c = 0;
  let index = 0;
  let interval = (maxPoint - minPoint) / k; // delta
  for (let i = 0; i < k; i++) {
    for (; (index < points.length) && (points[index] <= minPoint + interval * (i+1)); index++) {
      if (points[index] >= minPoint) c++;
    }
    nArray[i] = c/m;
    c = 0;
  }
  
  let XYPoints = [];
  for (let i = 0; i < k; i++) {
    XYPoints.push(nArray[i] / points.length)   
  }
  return nArray;

}

export { getRandomPoints, getPointsForGistogram, getUniformPoints, getGausePoints, getExponentPoints, getGammaPoints, getTrianglePoints, getSimpsonPoints};