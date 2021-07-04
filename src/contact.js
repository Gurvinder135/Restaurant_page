import * as style from './index.js';
export 
function contact(){
style.createDiv(".all","div");
style.addClass("contact",".all>div:nth-child(4)");
style.addClass("text",".all>div:nth-child(4)");
style.addClass("hide",".all>div:nth-child(4)");

style.createDiv(".contact","h2");
style.addText("Contact us",".contact>h2")
style.createDiv(".contact","div");

style.createDiv(".contact>div","h3");
style.addText("Myself",".contact>div>h3");

style.createDiv(".contact>div","p");
style.addText("Manager",".contact>div>p:nth-child(2)");

style.createDiv(".contact>div","p");
style.addText("123-456-7890",".contact>div>p:nth-child(3)");

style.createDiv(".contact>div","p");
style.addText("abc@abc.com",".contact>div>p:nth-child(4)");
}