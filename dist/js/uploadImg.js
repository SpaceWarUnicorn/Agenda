var newImg;

export default newImg = (() => {
  'use strict';

  let getImage = (url) => {

    document.getElementById('button').addEventListener('click', function() {
      var files = document.getElementById('file').files;
      if (files.length > 0) {
        getBase64(files[0]);
      }
    });
    
    function getBase64(file) {
       var reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = function () {
         img.src = reader.result;
         console.log(reader.result);
       };
       reader.onerror = function (error) {
         console.log('Error: ', error);
       };
    }

  }
  return{
		getImage: getImage
	}
})();
