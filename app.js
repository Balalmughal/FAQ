//gets the hideShow from html
function hideShow() {
  var coll = document.getElementsByClassName("button");
  var i;
  for (i = 0; i < coll.length; i++) {
    //used to hide and show the information 
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      //targets the next sibling in the div allows to click every element needed
      var answer = this.nextElementSibling;
      //element will not be displayed
      if (answer.style.display === "block") {
        answer.style.display = "none";
        //targets the first child element
        this.children[0].innerText= "+";
      //element will be displayed as a block
      } else {
        answer.style.display = "block";
        //targets the first child element
        this.children[0].innerText= "-";
      }
    });
  }
}
