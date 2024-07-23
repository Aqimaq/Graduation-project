function Modal_Casual() {
    document.querySelector(".casual").classList.remove("none")
    document.querySelector(".modal_back").classList.remove("none")
    document.querySelector(".pro").classList.add("none")
}
function Modal_Pro() {
    document.querySelector(".pro").classList.remove("none")
    document.querySelector(".modal_back").classList.remove("none")
    document.querySelector(".casual").classList.add("none")
}
document.querySelector(".modal_back").addEventListener("click", function (event) {
    if (event.target.closest('#modal__okno') == null) {
        document.querySelector(".modal_back").classList.add("none")
    }
})