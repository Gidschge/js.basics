window.onload = function name() {
    let name = prompt('Gib deinen Namen an:')
    document.getElementById("greenbox").innerText = name + "'s Bakery"
}

let clickcount = 0


function press() {
    let counter = document.getElementById("counter")
    let stage = document.getElementById("stage")

    if (clickcount < 30) {
        clickcount = 1 + clickcount;
    } else if (clickcount < 100) {
        clickcount = 2 + clickcount
        stage.textContent = "Bad"
    } else if (clickcount < 1000) {
        clickcount = 5 + clickcount
        stage.textContent = "Noob"
    } else if (clickcount < 10000) {
        clickcount = 10 + clickcount
        stage.textContent = "Intermediate"
    } else {
        clickcount = 100 + clickcount
        stage.textContent = "Pro"
    }
    counter.textContent = clickcount
}