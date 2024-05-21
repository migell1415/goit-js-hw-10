import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();
  const delay = parseInt(event.target.delay.value);
  const state = event.target.state.value;

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      }
    }, delay);
  });

  myPromise
    .then((delay) => {
        iziToast.success({
        title: 'Ok',
        titleColor: '#FFFFF0',
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#FFFFF0',
        backgroundColor: 'green',
        position: 'topRight',
        progressBar: false,
        close: true,
      });
    })
    .catch((delay) => {
        iziToast.error({
        title: 'Error',
        titleColor: '#FFFFF0',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#FFFFF0',
        backgroundColor: 'red',
        position: 'topRight',
        progressBar: false,
        close: true
      });
    });
});
