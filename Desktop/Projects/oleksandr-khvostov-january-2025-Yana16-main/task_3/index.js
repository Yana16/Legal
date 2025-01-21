/**
 * @typedef Point
 * @type {object}
 * @property {number} x
 * @property {number} y
 * @property {number} z
 */

/**
 * @typedef Result
 * @type {object}
 * @property {Point[]} probes
 */

/**
 * @param {number} min
 * @param {number} max
 *
 * @returns {number}
 */
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * @returns {Point}
 */
const getRandomCoordinates = () => {
  return {
    x: getRandomNumber(0, 100),
    y: getRandomNumber(0, 100),
    z: getRandomNumber(0, 100),
  };
};

/**
 * @returns {Point}
 */
const createAsteroid = () => {
  return getRandomCoordinates();
};

/**
 * @param {Point} point1
 * @param {Point} point2
 *
 * @returns {number}
 */
const getDistanceBetweenPoints = (point1, point2) => {
  return Math.sqrt(
    Math.pow(point1.x - point2.x, 2) +
      Math.pow(point1.y - point2.y, 2) +
      Math.pow(point1.z - point2.z, 2)
  );
};

/**
 * @return {Result}
 */
const findAsteroidLocation = () => {
  const asteroid = createAsteroid();
  const probes = [];
  const distances = [];

  for (let i = 0; i < 3; i++) {
    const probe = getRandomCoordinates();
    probes.push(probe);
    const distance = getDistanceBetweenPoints(probe, asteroid);
    distances.push(distance);
  }
  return {
    location: asteroid,
    probes,
  };
};

module.exports = {
  getRandomNumber,
  getRandomCoordinates,
  createAsteroid,
  getDistanceBetweenPoints,
  findAsteroidLocation,
};
