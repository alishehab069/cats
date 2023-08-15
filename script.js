var input0 = document.getElementsByClassName("inputs");


// Iterate through the collection and add event listener to each element
for (var i = 0; i < input0.length; i++) {
    input0[i].addEventListener("mouseover", function() {
        this.style.width = "260px";
        this.style.height = "35px";

    });
}

for (var i = 0; i < input0.length; i++) {
    input0[i].addEventListener("mouseleave", function() {
        this.style.width = "250px";
        this.style.height = "30px";

    });
}