import core from '/dist/js/storage.js';

(() => {
  'use strict';
  let users = core.users,
    label = '',
    target,
    bienvenida = document.querySelector('#bienvenida'),
    info = document.querySelector('#info'),
    infoPerson = document.querySelector('#info_contact'),
    icon = document.querySelector('plus-icon'),
    newPerson = document.querySelector('#new_contact');

  let contactElement = document.querySelector("#contact");

  for (let i in users) {

    label = document.createElement("person-label");
    label.setAttribute('name', users[i].name);
    label.setAttribute('descript', users[i].descript);
    label.setAttribute('imgsrc', users[i].imgsrc);
    contactElement.appendChild(label);
  }

  document.querySelector('.cont').addEventListener('click', (e) => {
    target = e.target;
    if (target.name || target == icon) {

      bienvenida.classList.remove("show");
      bienvenida.classList.add("toggle");
      info.classList.remove("toggle");
      info.classList.add("show");

      if(target.name){
        infoPerson.classList.remove("toggle");
        infoPerson.classList.add("show");

        newPerson.classList.add("toggle");
        newPerson.classList.remove("show");

      } else{

        newPerson.classList.remove("toggle");
        newPerson.classList.add("show");

        infoPerson.classList.add("toggle");
        infoPerson.classList.remove("show");
      }

    }

  });
})();
