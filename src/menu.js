import * as style from './index.js';
export function menu(){
style.createDiv(".all","div");
style.addClass("menu",".all>div:nth-child(3)");
style.addClass("hide",".all>div:nth-child(3)");

// First para
style.createDiv(".menu","div");
style.addClass("wine",".menu>div:nth-child(1)");

style.createDiv(".wine","div");
style.addClass("text",".wine>div");

style.createDiv(".wine>.text","h2");
style.addText("Cocktail",".wine>.text>h2");

style.createDiv(".wine>.text","p");
style.addText("Blue Hawaii      $7.00",".wine>.text>p:nth-child(2)");

style.createDiv(".wine>.text","p");
style.addText("Long Island      $9.00",".wine>.text>p:nth-child(3)");

style.createDiv(".wine>.text","p");
style.addText("Margarita        $8.00",".wine>.text>p:nth-child(4)");

style.createDiv(".wine","div");
style.addClass("img",".wine>div:nth-child(2)");

style.createDiv(".wine>.img","img");
document.querySelector(".wine>.img>img").setAttribute('src',"drink.jpg");

// second para
style.createDiv(".menu","div");
style.addClass("snacks",".menu>div:nth-child(2)");

style.createDiv(".snacks","div");
style.addClass("img",".snacks>div:nth-child(1)");

style.createDiv(".snacks>.img","img");
document.querySelector(".snacks>.img>img").setAttribute('src',"snacks.jpg");

style.createDiv(".snacks","div");
style.addClass("text",".snacks>div:nth-child(2)");

style.createDiv(".snacks>.text","h2");
style.addText("Snacks",".snacks>.text>h2");

style.createDiv(".snacks>.text","p");
style.addText("Apricot Wings     $36.00",".snacks>.text>p:nth-child(2)");

style.createDiv(".snacks>.text","p");
style.addText("Petzel Sticks     $33.00",".snacks>.text>p:nth-child(3)");

style.createDiv(".snacks>.text","p");
style.addText("Buffalo Wings     $33.00",".snacks>.text>p:nth-child(4)");


}