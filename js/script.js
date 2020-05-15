let btnMenu = document.querySelector('.menu');
let nav1 = document.querySelector('.nav1');
let nav2 = document.querySelector('.nav2');
let navList = document.querySelector('.nav-list');

btnMenu.onclick = function () {
  nav1.classList.toggle('nav-1');
  nav2.classList.toggle('nav-2');
  // setInterval(() => {
  //   navList.classList.toggle('invisible');
  // }, 2000);
};
