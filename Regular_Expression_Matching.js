/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let regularExpression = new RegExp(p);
  let resultArray = s.match(regularExpression);
  return resultArray ? s === resultArray[0] : false;
};
