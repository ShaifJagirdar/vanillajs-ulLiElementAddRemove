document.addEventListener("DOMContentLoaded", function(){
    // console.log("loaded");
    const add = document.querySelector("#addi");
    const remove = document.querySelector("#remove");
    var ul = document.querySelector("ul");
    let input = document.querySelector("#elem");
    var li;
    

    add.addEventListener("click", function(){
        // console.log("clicked");
        if(!input.value) return;
        else{
            li = document.createElement("li");
            li.textContent = input.value;
            ul.appendChild(li);
            input.value = "";
        }
        
    })

    remove.addEventListener("click",function(){
        if(ul.childElementCount > 0){
            console.log("clicked");
            ul.removeChild(ul.lastChild);
        }
    })
})