const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("input-el");
// let num =[];
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
convertBtn.addEventListener("click", function(){
    // num.push(number.value)
    lengthEl.textContent = (` ${number.value} meters = ${(number.value * 3.281).toFixed(2)} feet  |  ${number.value} feet = ${(number.value / 3.281).toFixed(2)} meters`)
    console.log(number.value)

    volumeEl.textContent = (` ${number.value} liters = ${(number.value * 0.264).toFixed(2)} gallons  |  ${number.value} gallons = ${(number.value / 0.264).toFixed(2)} liters`)
    console.log(number.value)

    massEl.textContent = (` ${number.value} kilos = ${(number.value * 2.204).toFixed(2)} pounds  |  ${number.value} pounds = ${(number.value / 2.204).toFixed(2)} kilos`)
    console.log(number.value)
} )

