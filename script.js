
var shoes = document.getElementById("shoes");
var bags = document.getElementById("bags");
//var shoe = document.getElementById("shoe");
//var bag = document.getElementById("bag");
var product = document.getElementById("product");


product.addEventListener("change", function(){
    var selected = product.value
    if (selected == "Shoes"){
        shoes.style.display = "block";
        bags.style.display = "none";
    }
        
    else if (selected == "Bags"){
        bags.style.display = "block";
        shoes.style.display = "none";
    }else{
        shoes.style.display = "none";
        bags.style.display = "none";
    }
});