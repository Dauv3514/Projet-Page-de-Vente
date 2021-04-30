

let couleur1 = document.querySelector ('#color1') ;
let couleur2 = document.querySelector ('#color2') ;
let couleur3 = document.querySelector ('#color3') ;
let image = document.querySelector ('#imgchaise') ;

couleur1.addEventListener('click' , () => {

     image.src = "images/chaises.jpg" ;

});

couleur2.addEventListener('click' , () => {

     image.src = "images/chaises2.jpg" ;

});

couleur3.addEventListener('click' , () => {

     image.src = "images/chaises3.jpg" ;

});