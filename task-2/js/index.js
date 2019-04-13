'use strict';

function formatNumber(str) {
  const simbols = ['+', '(', ')', '-', ' '];
  return str.split('').filter(x => !simbols.includes(x)).slice(1).join('');
}

const formatNumber2 = str => {
  return str.replace(/\+\d\((\d+)\)(\d+)-(\d+)-(\d+)/, '$1$2$3$4');
};
