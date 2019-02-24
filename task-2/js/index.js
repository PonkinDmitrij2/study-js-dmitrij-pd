'use strict';

function formatNumber(str) {
  const simbols = ['+', '(', ')', '-', ' '];
  return str.split('').filter(x => !simbols.includes(x)).slice(1).join('');
}
