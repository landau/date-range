'use strict';

var toString = {}.toString;
function isDate(d) {
  return toString.call(d) === '[object Date]';
}

/**
 * Creates an array of dates
 *
 * @param {Date} start
 * @param {Date} [end]
 * @param {Number} [step]
 *
 * @return {Array}
 */
function range(start, end, step) {
  end = end || new Date();
  step = step || range.defaultStep;

  if (!isDate(start) || !isDate(end)) throw new TypeError();

  var length = Math.ceil((end - start) / step);
  var out = new Array(length);
  out[0] = start;

  for (var i = +start + step, j = 1; i < +end; i += step, j += 1) {
    out[j] = new Date(i);
  }
  out[length] = end;
  return out;
}

range.MS = 1;
range.SEC = 1e3;
range.MIN = 60e3;
range.HOUR = range.MIN * 60;
range.DAY = range.HOUR * 24;

range.defaultStep = range.DAY;

module.exports = range;
