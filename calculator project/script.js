const fruites = ["plant", "fruit", "tree", "seed", "leef", "ground"]

const orders = [5,3,0,2,4,1]

const result = orders.map(i => fruites[i])

console.log(result);


function calculate() {
    var userInput = document.getElementById("display").value 
    var result = eval(userInput)

    document.getElementById("display").value = result
}
function displayValu(val) {
    document.getElementById("display").value = document.getElementById("display").value + val
}

function clearDisplay() {
    document.getElementById("display").value = ""
}
function deleteItem(){
    var displayItem = document.getElementById("display");
    var item = displayItem.value

    if(item.length > 0){
        displayItem.value = item.slice(0, -1)
    }
}

