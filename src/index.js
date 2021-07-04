import {menu} from './menu.js'
import {home} from './home.js'
import {main} from './main.js'
import {contact} from './contact.js'
(function(){
   
    main();
    home();
    menu();
    contact();

    document.querySelectorAll(".header>div").forEach(function(element){element.addEventListener ("click", function(){
        let home=document.querySelector(".home");
        let menu=document.querySelector(".menu");
        let contact=document.querySelector(".contact");
        if(element.textContent==="Home"){
         
            menu.classList.add("hide");
            contact.classList.add("hide");
            home.classList.remove("hide");

        } else if(element.textContent==="Menu"){
            
            home.classList.add("hide");
            contact.classList.add("hide");
            menu.classList.remove("hide");
        }   else if(element.textContent==="Contact"){
            
            menu.classList.add("hide");
            home.classList.add("hide");
            contact.classList.remove("hide");
            
        }
    }
        
    )});

})();

function createDiv(append, element){
    let a=document.createElement(element);
    document.querySelector(append).appendChild(a);
}
function addClass(className, element){
     document.querySelector(element).classList.add(className);
}
function addText(text,element){
    document.querySelector(element).textContent=text;
}
export{createDiv, addClass, addText};
