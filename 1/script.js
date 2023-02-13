let array = ["gray", "blue", "red", "orange", "cyan", "black", "purple", "green", "magenta", "maroon"];


function change() {

    //Generamos el random number
    let i = Math.floor(Math.random() * 10);

    //asignamos el numero random a un value del array
    let color = array[i];

    //seleccionamos el boton del html
    let title = document.getElementById("card__title");

    //cambiamos el etxto en el html
    title.innerHTML = `Background Color : ${color}`;

    //Seleccionamos el body del html
    let body = document.getElementById("body");

    //le damos el estilo al body y su background
    body.style.backgroundColor = `${color}`; 

}