function activeColumns(id){
    var element = document.getElementById(id);
    const parent = element.offsetParent.parentElement;

    const active = document.querySelector(".activate")

    if(parent.classList.contains("deactivate") && active){
        /* console.log("if verificacion")
        console.log("active dentro del if", active.classList)  */   
        active.className = active.className.replace(" activate", " deactivate")
        active.className = active.className.replace(" active-week", " inactive-week")
    }
    if(parent.classList.contains("inactive-week")){
        toggleColumn(parent);
        parent.className = parent.className.replace(" deactivate", " activate");
        parent.className = parent.className.replace(" inactive-week", " active-week");
    }else if(parent.classList.contains("active-week")){
        unToggleColumn(parent);
        parent.className = parent.className.replace(" activate", " deactivate");
        parent.className = parent.className.replace(" active-week", " inactive-week");
    }
}

function unToggleColumn(parent){
    var x = parent.getElementsByClassName("toggle-column");
    for (let index = 0; index < x.length; index++) {
        const element = x[index];
        
        if (element.style.display === "none") {
            element.style.display = "block";
        } else{
            element.style.display = "none";
        }
    }
}

function toggleColumn(parent){
    var x = parent.getElementsByClassName("toggle-column");
    for (let index = 0; index < x.length; index++) {
        const element = x[index]; 
        //console.log("Display de elemento descontraido", element.style.display)     
        //if(element.classList.contains("week-headers")) element.style.display = "table-row"
        if (element.style.display === "none" || element.style.display === "block") {
            element.style.display = "table-cell";      
        }   
    }
}

function toggleUntoggleCol(){
    
}