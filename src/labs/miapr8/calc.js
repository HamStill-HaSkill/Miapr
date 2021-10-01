let getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }


const getObjects = (points) => {
    return points.map(point => getRandom(point-1, point+1));
}

export default getObjects;