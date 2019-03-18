

let tabclicked = (tabname) => {
    console.log(tabname);
    let tab = document.getElementById(tabname);
    let contentpage = document.getElementById("content");
    let colour = window.getComputedStyle(tab).getPropertyValue("background-color");
    console.log(colour);
    contentpage.style.borderLeftColor=colour;
};

let window_resized = () => {
    let content = document.getElementById("content");
    let wh = window.innerHeight;
    let ww = window.innerWidth;
    let navcon = document.getElementById("navandcon");
    let navbuttons = document.getElementById("navigation");
    if(ww<wh){
        navcon.classList.replace('flex-row','flex-column');
        navbuttons.classList.replace('flex-column','flex-row');
        let buttons = document.getElementByClass("navtab");
        for(eachbutton : buttons)
    }else{
        navcon.classList.replace('flex-column','flex-row');
        navbuttons.classList.replace('flex-row','flex-column');
        navbuttons.styles.fontSize = "12px";
    }
    console.log(navcon.classList);
    console.log('resized !');
};

window.addEventListener('resize',(e)=>{window_resized();});


