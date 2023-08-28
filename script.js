const menuIcon = document.querySelector("#menuIcon")
const menu = document.querySelector("#menu")
let menuStatus = false

const menuToggle = () => {
    if (menuStatus == false) {
        menu.style.display = "block"
        setTimeout(() => {
            menu.style.opacity = "1"
        }, "10")
        menuStatus = true
    } else {
        menu.style.opacity = "0"
        setTimeout(() => {
            menu.style.display = "none"
        }, "250")
        menuStatus = false
    }
}

const arrowIcon = document.querySelectorAll(".arrow")
const hiddenParagraph = document.querySelectorAll(".hidden")
let arrowStatus = false

const arrowToggle = (number) => {
    if (arrowStatus == false) {
        hiddenParagraph[number].style.display = "block"
        setTimeout(() => {
            hiddenParagraph[number].style.opacity = "1"
        }, "10")
        arrowIcon[number].style.transform = "rotate(90deg)"
        arrowStatus = true
    } else {
        hiddenParagraph[number].style.display = "none"
        hiddenParagraph[number].style.opacity = "0"
        arrowIcon[number].style.transform = "rotate(270deg)"
        arrowStatus = false
    }

    console.log(arrowIcon[number])
}
