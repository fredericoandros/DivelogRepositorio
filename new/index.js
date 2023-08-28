const menuIcon = document.querySelector("#menuIcon")
const menu = document.querySelector("#menu")
let menuStatus = false

const menuToggle = () => {
    if (menuStatus == false) {
        menu.style.display = "block"
        menuStatus = true
    } else {
        menuStatus = false
        menu.style.display = "none"
    }
    console.log(menuStatus)
}
