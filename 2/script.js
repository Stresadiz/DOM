let i = 0;

let count__num = document.getElementById("count__num");

function decrease() {
    
    i--;

    if(i<0){
        alert("The number can't be lower than 0");
    } else {
        count__num.innerHTML = i;
    }

}

function increase() {
    
    i++;

    count__num.innerHTML = i;

}

function reset() {
    
    i = 0;

    count__num.innerHTML = i;
}