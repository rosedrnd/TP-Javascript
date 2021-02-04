window.onload = function () {
    var deckCards = [];
    for (var i = 1; i < 52; i++) {
        deckCards[i] = {
            nomCarte: ["roi", "dame", "valet"],
            typeCarte: ["Carreau", "Trèfle", "Pique", "Coeur"],
            nombreCarte: function getRandomArbitrary(min = 1, max = 52) {
                let randomNum = Math.random() * (max - min) + min;
                return Math.round(randomNum);
            }
        }
    }
    var body = document.querySelector('body');

    for (let i = 1; i <= 52; i++) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        img.setAttribute('src', 'https://via.placeholder.com/150/808080?text=Mystery+Card');
        img.setAttribute('class', 'img' + i);
        body.appendChild(div);
        div.appendChild(img);
        div.addEventListener('dblclick', function (e) {
            let imgSelect = document.querySelector('.img' + i);
            imgSelect.setAttribute('src', 'https://via.placeholder.com/150/808080?text=Mystery+Card');
        });
    }

      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        var result = 'https://via.placeholder.com/150/'+color; 
        return result;
         
      }; 

      function getRandomText() {
        var array = ['Dame', 'Roi','Valet', 'Coeur', 'Pique', 'Carreau', 'trèfle']; 
        var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; 
        if (array == ['Coeur', 'Pique', 'Carreau', 'trèfle'] ){
            let random = Math.floor(Math.random()*array.length);
                return '?text='+number[random] + array[random];
        
        }else {
            let random = Math.floor(Math.random()*array.length);
            return '?text='+array[random];
        }
      } 
    console.log(getRandomText()); 
    for (let i = 1; i <= 52; i++) {
        let imgClick = document.querySelector('.img' + i);
        imgClick.addEventListener('click', function (e) {
            imgClick.setAttribute('src', getRandomColor()+getRandomText());
            console.log(imgClick)
        });
    }
    imgClick.addEventListener('click', function (e) {
    });
}