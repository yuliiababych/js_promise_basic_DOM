'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((message) => {
  document.querySelector('body').innerHTML +=
    `<div class="message">${message}</div>`;
});

promise2.catch((message) => {
  document.querySelector('body').innerHTML +=
    `<div class="message error-message">${message}</div>`;
});
