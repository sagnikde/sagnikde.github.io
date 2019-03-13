

let tabclicked = (tabname) => {
    console.log(tabname);
    let tab = document.getElementById(tabname);
    let contentpage = document.getElementById("content");
    let colour = window.getComputedStyle(tab).getPropertyValue("background-color");
    console.log(colour);
    contentpage.style.borderLeftColor=colour;

}