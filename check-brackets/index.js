'use strict';

function checkBrackets(srcString) {
  const brackets = srcString.split('').filter(item => {
    return item === '(' || item === ')';
  });

  if (brackets[0] === ')' || brackets.length % 2 !== 0) {
    return false;
  }

  const map = brackets.reduce((acc, item) => {
    acc[item] = (acc[item] + 1) || 1;
    return acc;
  } ,{});

  return map['('] === map[')'];
}

// console.log( checkBrackets("((dr33)") ); // false
// console.log( checkBrackets("asd((a)s)()d") ); // true
// console.log( checkBrackets(")67(") ); // false
// console.log( checkBrackets("(()(") ); // false
