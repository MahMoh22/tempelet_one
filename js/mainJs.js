let barsIcon = document.getElementById("bars");
let navUl = document.getElementById("list");

barsIcon.onclick =  togele;

function togele() {
    if(navUl.style.display === "none"){
        navUl.style.display = "flex";
    } else {
        navUl.style.display = "none";
    }
}