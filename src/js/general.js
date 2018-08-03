import core from '/dist/js/storage.js';

(()=>{
  'use strict';
    let users = core.users, label='';
    let contactElement = document.querySelector("#contact");

    for (let i in users){

      label = document.createElement("person-label");
      label.setAttribute('name', users[i].name);
      label.setAttribute('descript', users[i].descript);
      label.setAttribute('imgsrc', users[i].imgsrc);
      contactElement.appendChild(label);
    }
})();
