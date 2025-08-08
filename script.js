let tittle = document.getElementById("tittle");
let para = document.getElementById("p");
let changeBtns = document.querySelectorAll(".change"); // Can be multiple buttons

let ifChanged = false;

changeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        function showTime() {
            const timeNow = new Date().toLocaleDateString();
            document.getElementById("date").innerText = timeNow;
            document.getElementById("date-1").innerText = timeNow;
        }
        showTime();

        if (!ifChanged) {
            ifChanged = true;
            tittle.innerText = "Mathan";
            para.innerText = "Hello, I'm Mathan from heaven.";
            para.style.color = "blue";
            tittle.style.color = "whitesmoke";
            tittle.style.backgroundColor = "black";
        } else {
            ifChanged = false;
            alert("You clicked twice");
        }
    });
});


let submit = document.getElementById("submit");
let result = document.getElementById("result");

submit.addEventListener("click",() => {
    const value1 = document.getElementById("input1").value;
    const value2= document.getElementById("input2").value;

    let output = Number(value1) + Number(value2);

    result.innerText = "Result: " + output;

});
