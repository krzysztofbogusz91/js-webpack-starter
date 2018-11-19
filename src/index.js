import './style.css';

const initApp = () => {
  let helloDiv = document.createElement('div');
  helloDiv.innerText = 'Hello to webpack starter';
  document.querySelector('.container').appendChild(helloDiv);
};

initApp();
