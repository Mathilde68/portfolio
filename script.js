"use strict";


window.addEventListener('DOMContentLoaded', start);

function start(){

    document.getElementById("card").addEventListener("click", () =>{
        location.href="cards.html";
    });

    document.getElementById("col").addEventListener("click", () =>{
        location.href="color.html";
    });


    document.getElementById("resp").addEventListener("click", () =>{
        location.href="resp.html";
    });


}