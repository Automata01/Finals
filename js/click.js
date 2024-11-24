//click nav to hide
function myFunction() {
    var x = document.getElementById("ul-nav");
    if (x.className === "ul-nav") {
        x.className += " responsive";
    } else {
        x.className = "ul-nav";
    }
}