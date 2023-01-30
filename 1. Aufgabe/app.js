/*function rechnenaddieren() {

    let feld1 = document.getElementById('feld1');

    let feld2 = document.getElementById('feld2');

    let result = document.getElementById('result');

    result.innerHTML = Number(feld1.value) + Number(feld2.value);

}



function rechnenMinus() {

    let feld1 = document.getElementById('feld1');

    let feld2 = document.getElementById('feld2');

    let result = document.getElementById('result');

    result.innerHTML = Number(feld1.value) - Number(feld2.value);

}



function rechnenMal() {

    let feld1 = document.getElementById('feld1');

    let feld2 = document.getElementById('feld2');

    let result = document.getElementById('result');

    result.innerHTML = Number(feld1.value) * Number(feld2.value);

}



function rechnenDividieren() {

    let feld1 = document.getElementById('feld1');

    let feld2 = document.getElementById('feld2');

    let result = document.getElementById('result');

    result.innerHTML = Number(feld1.value) / Number(feld2.value);

}*/



function berechne(operator) {

    let feld1 = document.getElementById('feld1');

    let feld2 = document.getElementById('feld2');

    let result = document.getElementById('result');

    if (operator == 'add') {
        result.innerHTML = Number(feld1.value) + Number(feld2.value);
    }

    if (operator == 'sub') {
        result.innerHTML = feld1.value - feld2.value;
    }

    if (operator == 'multi') {
        result.innerHTML = feld1.value * feld2.value;
    }

    if (operator == 'divi') {
        result.innerHTML = feld1.value / feld2.value;
    }
}