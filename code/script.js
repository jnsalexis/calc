const numOne = document.getElementById("numOne")
const numTwo = document.getElementById("numTwo")
const button = document.getElementsByTagName("button")[0]
const displayResult = document.getElementById("result")

function add(numOne, numTwo) {
    const sum =  Number(numOne) + Number(numTwo)
    displayResult.innerHTML = sum
}

button.addEventListener('click', function() {
    add(numOne.value, numTwo.value)
})