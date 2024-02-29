/*
* File: main.js
* Author: VTG
* Copyright: 2024, VTG
* Group: Szoft I/N/1
* Date: 2024-2-29
* Github: https://github.com/valaki2004/
* Licenc: GNU GPL
*/
const baseInput = document.querySelector("#base") 
const heightInput = document.querySelector("#height")
const areaInput = document.querySelector("#area")
const calcButton = document.querySelector("#Gomb")

calcButton.addEventListener('click',()=>
{
    start();
});

function start()
{
    const base = Number(baseInput.value)
    const height = Number(heightInput.value)
    const area = calc(base,height)
    areaInput.value = area
}
function calc(base,height)
{
    return base * height /2
}

