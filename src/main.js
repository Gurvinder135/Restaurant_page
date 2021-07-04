import * as style from './index.js';
export function main(){
    style.createDiv("#content","div");
    style.addClass("all","#content>div");

    style.createDiv(".all","div");
    style.addClass("header",".all>div:nth-child(1)");

    style.createDiv(".header","div");
    style.addText("Home",".header>div:nth-child(1)");

    style.createDiv(".header","div");
    style.addText("Menu",".header>div:nth-child(2)");

    style.createDiv(".header","div");
    style.addText("Contact",".header>div:nth-child(3)");
}