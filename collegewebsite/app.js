let burger = document.querySelector(".burger");
let links = document.querySelector(".nav-links");
let textarea = document.querySelector(".text-center");
burger.addEventListener('click',()=> {
    links.classList.toggle("nav-show");
    textarea.classList.toggle("textareahide");
})