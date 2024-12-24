import currency from 'currency.js';

export default {
  format: (value, { separator = ' ', precision = 2, decimal = '.', symbol = '' } = {}) => {
    if (Number(value) === Math.floor(value)) {
      precision = 0;
    }
    return currency(value, { separator, precision, decimal, symbol }).format();
  },
  add: (value, addValue, { precision = 2 } = {}): string => String(currency(value, { precision }).add(addValue)),
  subtract: (value, subtractValue, { precision = 2 } = {}): string =>
    String(currency(value, { precision }).subtract(subtractValue)),
  normalize: (value, { precision = 2 } = {}) => String(currency(value, { precision }))
};
