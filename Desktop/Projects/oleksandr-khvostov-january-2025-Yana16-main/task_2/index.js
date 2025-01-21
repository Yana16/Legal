const { keys } = require("browser-sync/dist/async-tasks");

let handlers = {};

handlers.include = (data, criteria) => {
  return data.filter((item) => {
    return criteria.some((elem) => {
      return Object.keys(elem).every((key) => {
        return item[key] === elem[key];
      });
    });
  });
};

handlers.exclude = (data, criteria) => {
  return data.filter((item) => {
    return !criteria.some((elem) => {
      return Object.keys(elem).every((key) => item[key] === elem[key]);
    });
  });
};

handlers.sortBy = (data, keys) => {
  return data.slice().sort((a, b) => {
    for (let key of keys) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
    }
    return 0;
  });
};
/**
 * Додає новий обробник, який буде взаємодіяти з даними
 * @param {string} name Назва обробника
 * @param {(data:unknown[])=>unknown[]} handler Функція, яка буде оброблювати дані
 */
const addNewHandler = (name, handler) => {
  handlers[name] = handler;
};

/**
 * Запускає всі додані обробники на переданих даних і повертає відповідний результат
 * @param {unknown[]} data
 * @param {Object.<string, unknown[]>} conditions
 *
 * @return {unknown[]}
 */

const runHandlers = (data, conditions) => {
  let result = data;

  for (const [key, value] of Object.entries(conditions)) {
    if (handlers[key]) {
      result = handlers[key](result, value);
    }
  }

  return result;
};

module.exports = { addNewHandler, runHandlers };
