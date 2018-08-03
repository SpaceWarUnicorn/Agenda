var core;

export default core = (()=>{
    'use strict';

    var users =[
		{
			name: 'Osva Ocampo',
      descript: 'Simplemente Yo!',
      imgsrc:'usr_0.jpg'
		},
    {
      name: 'Juan Ángel',
      descript: 'Cinéfilo, Melómano y Artista de Software. &nbsp; "La vida es un viaje, disfrutalo"',
      imgsrc:'usr_1.jpg'
		}
	]

  var localDB = window.localStorage.getItem('db');

	var MixinsCore = (function(){

		const saveLocalStorage = ()=> {
			window.localStorage.setItem('db',JSON.stringify(users));
		};

		const findUser = (obj)=>{

			let name = obj;
			let index = undefined;

			for(let i in users){
				let item = users[i];

				if(item.name == name){
					index = i;
					break;
				}
			}

			let foundObj = users[index];
      return foundObj;
		};

		return{
			saveLocalStorage: saveLocalStorage,
			findUser: findUser
		}

	})();

	/***********************
	 * This section create the local storage
	 * or verificate if exits
	 **********************/

	if (localDB) {
		window.USERSDB = JSON.parse(localDB);
	}else {
		window.localStorage.setItem('db','[]');
		MixinsCore.saveLocalStorage()
    }


	return{
		users: users,
		MixinsCore: MixinsCore
	}


})();
