const popupOverlay = document.querySelector(".overlay")
const popupBox = document.querySelector(".popupbox")
const show = document.getElementById("showPopup")
const close = document.getElementById("closePopup")

show.addEventListener("click", () => {
    popupBox.style.display = "block"
    popupOverlay.style.display = "block"
})

close.addEventListener("click", () => {
    popupBox.style.display = "none"
    popupOverlay.style.display = "none"
})


const addText = document.getElementById("addText")

const deleteItem = document.getElementById("delete")
const minPopup = document.querySelector(".popupMini")

addText.addEventListener("click", () => {
    const inputValue = document.getElementById("inputText").value ;
    document.getElementById("display").innerText = inputValue

    minPopup.style.display = "block"

})

deleteItem.addEventListener("click", () => {
    minPopup.style.display = "none"
})


