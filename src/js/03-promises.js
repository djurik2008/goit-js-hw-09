const refs = {
  btnSubEl: document.querySelector('.form button'),
  formEl: document.querySelector('form')
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
