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

// -------------------- Teacher's decision v1. --------------------
const checkBrackets = text => {
  let balance = 0;

  for (let i = 0; i < text.length; i++) {
    let item = text[i];
    if (item === '(') {
      balance++;
    }

    if (item === ')') {
      balance--;
      if (balance < 0) {
        return false;
      }
    }

    return balance === 0;
  }
};

// console.log( checkBrackets("((dr33)") ); // false
// console.log( checkBrackets("asd((a)s)()d") ); // true
// console.log( checkBrackets(")67(") ); // false
// console.log( checkBrackets("(()(") ); // false
