const container = document.querySelector(".container");
const card = document.querySelector(".card");
const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".title");
const description = document.querySelector(".info h3");
const purchase = document.querySelector(".purchase button");
const size = document.querySelector(".sizes");


container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", function(){
    card.style.transform = "none";
    sneaker.style.transform = "translateZ(100px) rotate(-45deg)";
    title.style.transform = "translateZ(100px)";
    description.style.transform = "translateZ(50px)";
    purchase.style.transform = "translateZ(50px)";
    size.style.transform = "translateZ(50px)";


});

container.addEventListener("mouseleave", function(){
    card.style.transform = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    sneaker.style.transform = "translateZ(0) rotate(0)";
    title.style.transform = "translateZ(0)";
    description.style.transform = "translateZ(0)";
    purchase.style.transform = "translateZ(0)";
    size.style.transform = "translateZ(0)";

});



