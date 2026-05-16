const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

});
const text = "Web Developer";

let index = 0;

function typeEffect(){

    if(index < text.length){

        document.getElementById("typing-text").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 100);
    }
}

typeEffect();
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", ()=>{

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});