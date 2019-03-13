

let tabclicked = (tabname) => {
    console.log(tabname);
    let tab = document.getElementById(tabname);
    let contentpage = document.getElementById("content");
    contentpage.style.border=tab.style.background;
}