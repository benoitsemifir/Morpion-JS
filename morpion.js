let morpion = Array(9)
const humain = "X"
const ordi = "O"

let joueur = humain

const changerJoueur = () => {
    if (joueur == "X") {
        joueur = "O"
    } else {
        joueur = "X"
    }
}

const jouer = (event) => {
    i = event.target.id
    console.log(event.target.id)
    if (!morpion[i].innerHTML) {
        morpion[i].innerHTML = joueur
        if (!verif()) {
            changerJoueur()
            ia()
        }
    }
}


const verifVide = () => {
    for (let i = 0; i < morpion.length; i++) {
        if (!morpion[i].innerHTML) {
            return true
        }
    }
    return false
}

const verifVictoire = () => {
    for (let i = 0; i <= 6; i += 3) {
        if (morpion[i].innerHTML && morpion[i].innerHTML == morpion[i + 1].innerHTML && morpion[i + 1].innerHTML == morpion[i + 2].innerHTML) {
            console.log(i, i + 1, i + 2)
            return true
        }
    }
    for (let i = 0; i < 3; i++) {
        if (morpion[i].innerHTML && morpion[i].innerHTML == morpion[i + 3].innerHTML && morpion[i + 3].innerHTML == morpion[i + 6].innerHTML) {
            console.log(i, i + 3, i + 6)
            return true
        }
    }
    if (morpion[4].innerHTML && ((morpion[0].innerHTML == morpion[4].innerHTML && morpion[4].innerHTML == morpion[8].innerHTML) || (morpion[2].innerHTML == morpion[4].innerHTML && morpion[4].innerHTML == morpion[6].innerHTML))) {
        return true
    }
    return false
}

const verif = () => {
    if (verifVictoire() && verifVide()) {
        console.log(joueur, " gagne")
        document.querySelector('h2').innerHTML = `${joueur} gagne`
        init()
        return true
    }
    if (!verifVide()) {
        console.log("Tie")
        document.querySelector('h2').innerHTML = "Tie"
        init()
        return true
    }
    return false
}

const init = () => {
    joueur = humain
    for (let i = 0; i < 9; i++) {
        morpion[i] = document.getElementById(i);
        morpion[i].innerHTML = null;
    }
}

const ia = () => {
    let i = 0
    let ok = false
    do {
        i = Math.floor(Math.random() * 8)
        if (!morpion[i].innerHTML) {
            morpion[i].innerHTML = joueur
            ok = true
        }
    } while (!ok);
    morpion[i].innerHTML = joueur
    verif()
    changerJoueur()
}

document.querySelector('table').addEventListener("click", jouer)
document.querySelector("button").addEventListener("click", init)
init()
