/**
 * Додає нові одиниці виміру та їх коефіцієнти до структури даних, яку ви створюєте і оброблюєте самостійно.
 *
 * @param {string} firstUnit
 * @param {string} secondUnit
 * @param {number} coefficient Коефіцієнт, який визначає відношення першої одиниці виміру до другої
 *
 */
const units = {
  km: {
    m: 1000,
    yd: 1094,
    ft: 3280.84,
  },
  m: {
    km: 0.001,
    yd: 1.094,
  },
  yd: {
    km: 0.0009144,
    m: 0.9144,
  },
};

console.log(units);

const addNewUnit = (firstUnit, secondUnit, coefficient) => {
  if (!units[firstUnit]) {
  }
  if (!units[secondUnit]) {
    units[secondUnit] = {};
  }

  units[firstUnit][secondUnit] = coefficient;
  units[secondUnit][firstUnit] = 1 / coefficient;
};

/**
 * Конвертує значення однієї одиниці виміру в іншу
 *
 * @param {string} convertFrom Назва одиниці виміру, з якої треба конвертувати (m, km, yd, ft)
 * @param {number} value Числове значення одиниці виміру з першого параметру
 * @param {string} convertTo Назва одиниці виміру до якої треба конвертувати (m, km, yd, ft)
 *
 * @returns {number}
 */

const convertDistanceUnits = (convertFrom, value, convertTo) => {
  if (!units[convertFrom] || !units[convertTo]) {
    throw new Error(`Конвертація ${convertFrom} в ${convertTo} не вірна!`);
  }
  if (typeof value !== "number") {
    throw new Error(`"${value}" не є числом!`);
  }
  const indexUnit = units[convertFrom][convertTo];
  const res = +(value * indexUnit).toFixed(2);
  if (indexUnit === undefined) {
    throw new Error(`undefined`);
  }

  return res;
};

module.exports = { addNewUnit, convertDistanceUnits };
