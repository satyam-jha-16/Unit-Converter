const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input-el").value;

inputEl = Number(inputEl)
convertBtn.addEventListener("click", function(){
    let output1 = `${inputEl} meters = ${(inputEl*3.281).toFixed(2)} feet  |  ${inputEl} feet = ${(inputEl/3.281).toFixed(2)} meters`
    console.log(output1)
} )

