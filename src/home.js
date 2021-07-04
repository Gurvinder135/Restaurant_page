import * as style from './index.js';
export function home(){
    
style.createDiv(".all","div");
style.addClass("home",".all>div:nth-child(2)");

// First para
style.createDiv(".home","h1");
style.addText("My Longue",".home>h1");

style.createDiv(".home","div");
style.addClass("about",".home div");

style.createDiv(".about","h3");
style.addText("About Us",".about>h3");

style.createDiv(".about","p");
style.addText("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ex esse ipsa quis, aperiam a in placeat quaerat neque earum, nulla facere architecto. Porro doloribus praesentium qui dolor in pariatur!",".about>p");

// second para
style.createDiv(".home","div");
style.addClass("hours",".home>div:nth-child(3)");

style.createDiv(".hours","h3");
style.addText("Hours of Operation",".hours>h3");

style.createDiv(".hours","p");
style.addText("Sunday: 8am:10pm",".hours>p:nth-child(2)");

style.createDiv(".hours","p");
style.addText("Monday: 6am:10pm",".hours>p:nth-child(3)" ); 

style.createDiv(".hours","p");
style.addText("Tuesday: 6am:10pm",".hours>p:nth-child(4)" );
style.createDiv(".hours","p");
style.addText("Wednesday: 8am:10pm",".hours>p:nth-child(5)" ); 

style.createDiv(".hours","p");
style.addText("Thursday: Closed",".hours>p:nth-child(6)" );

style.createDiv(".hours","p");
style.addText("friday: 6am:12pm",".hours>p:nth-child(7)" );

style.createDiv(".hours","p");
style.addText("Saturday: 6am:12pm",".hours>p:nth-child(8)" );

// third para
style.createDiv(".home","div");
style.addClass("location",".home>div:nth-child(4)");

style.createDiv(".location","h3");
style.addText("Location",".location>h3");

style.createDiv(".location","p");
style.addText("123 Main Drive, Toronto, Ontario",".location>p" );
}