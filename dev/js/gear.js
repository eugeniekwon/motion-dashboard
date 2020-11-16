import {gsap} from "gsap";

const gearTL = gsap.timeline();

// gsap.set("#gear", {transformOrigin: "50% 50%"})

gearTL.from("#gearP", {opacity:0, duration:0.3, x:-50})
        .from("#gearR", {opacity:0, duration:0.3, x:-50}, "-=0.1")
        .from("#gearN", {opacity:0, duration:0.3, x:-50}, "-=0.1")
        .from("#gearD", {opacity:0, duration:0.3, x:-50}, "-=0.1")
        .from("#gear-marker", {opacity:0, duration:0.5, x:-50})
        .to("#gearP", {duration: 0.3, fill: "#BD6757"})
        

export function gearAnimation(){
    return gearTL;
}


const gearTLTwo = gsap.timeline();

gsap.set("#gearD", {transformOrigin: "50% 50%"})

gearTLTwo.to("#gear-marker", {duration:0.5, y:80, ease:5}, "R")
        .to("#gearR", {duration:0.5, fill: "#BD6757"}, "R")
        .to("#gearP", {duration:0.5, fill: "#222"}, "R")

        .to("#gear-marker", {duration:0.5, y:150, ease:5}, "N")
        .to("#gearN", {duration:0.5, fill: "#BD6757"}, "N")
        .to("#gearR", {duration:0.5, fill: "#222"}, "N")

        .to("#gear-marker", {duration:0.5, y:230, ease:5}, "D")
        .to("#gearD", {duration:0.5, fill: "#BD6757"}, "D")
        .to("#gearN", {duration:0.5, fill: "#222"}, "D")

        .to("#gear-marker", {duration:0.5, opacity:0})

        
        .to("#gearN", {opacity:0, duration:0.3}, "remove")
        .to("#gearR", {opacity:0, duration:0.3}, "remove")
        .to("#gearP", {opacity:0, duration:0.3}, "remove")
        .to("#gearD", {duration: 0.2, y:-226}, "remove")
        .to("#gearD", {duration: 0.2, scale: 1.2})
        

export function gearAnimationTwo(){
    return gearTLTwo;
}

