import {gsap} from "gsap";

import { countUpNumbers } from "./speedometer.js"

const gearTL = gsap.timeline();

// gsap.set("#gear", {transformOrigin: "50% 50%"})

gearTL.from("#gearP", {opacity:0, duration:0.2, x:-50})
        .from("#gearR", {opacity:0, duration:0.2, x:-50}, "-=0.1")
        .from("#gearN", {opacity:0, duration:0.2, x:-50}, "-=0.1")
        .from("#gearD", {opacity:0, duration:0.2, x:-50}, "-=0.1")
        .from("#gear-marker", {opacity:0, duration:0.3, x:-50})
        .to("#gearP", {duration: 0.3, fill: "#BD6757"})
        

export function gearAnimation(){
    return gearTL;
}


const gearTLTwo = gsap.timeline();

gsap.set("#gearD", {transformOrigin: "50% 50%"})

gearTLTwo.to("#gear-marker", {duration:0.4, y:80, ease:5}, "R")
        .to("#gearR", {duration:0.4, fill: "#BD6757"}, "R")
        .to("#gearP", {duration:0.4, fill: "#222"}, "R")

        .to("#gear-marker", {duration:0.4, y:150, ease:5}, "N")
        .to("#gearN", {duration:0.4, fill: "#BD6757"}, "N")
        .to("#gearR", {duration:0.4, fill: "#222"}, "N")

        .to("#gear-marker", {duration:0.4, y:230, ease:5}, "D")
        .to("#gearD", {duration:0.4, fill: "#BD6757"}, "D")
        .to("#gearN", {duration:0.4, fill: "#222"}, "D")

        .to("#gear-marker", {duration:0.4, opacity:0})

        
        .to("#gearN", {opacity:0, duration:0.3}, "remove")
        .to("#gearR", {opacity:0, duration:0.3}, "remove")
        .to("#gearP", {opacity:0, duration:0.3}, "remove")
        .to("#gearD", {duration: 0.2, y:-226}, "remove")
        .to("#gearD", {duration: 0.2, scale: 1.2, onComplete: countUpNumbers})
        

export function gearAnimationTwo(){
    return gearTLTwo;
}





const gearTLThree = gsap.timeline();

gsap.set("#gearD", {transformOrigin: "50% 50%"})

gearTLThree.to("#gearD", {duration: 0.2, scale: 1})
            .to("#gearD", {duration: 0.2, y:0}, "remove")

            .to("#gearN", {opacity:1, duration:0.3}, "remove")
            .to("#gearR", {opacity:1, duration:0.3}, "remove")
            .to("#gearP", {opacity:1, duration:0.3}, "remove")

            .to("#gear-marker", {duration:0.4, opacity:1})

            .to("#gear-marker", {duration:0.4, y:150, ease:5}, "D")
            .to("#gearD", {duration:0.4, fill: "#222"}, "D")
            .to("#gearN", {duration:0.4, fill: "#BD6757"}, "D")

            .to("#gear-marker", {duration:0.4, y:80, ease:5}, "N")
            .to("#gearN", {duration:0.4, fill: "#222"}, "N")
            .to("#gearR", {duration:0.4, fill: "#BD6757"}, "N")

            .to("#gear-marker", {duration:0.4, y:0, ease:5}, "R")
            .to("#gearR", {duration:0.4, fill: "#222"}, "R")
            .to("#gearP", {duration:0.4, fill: "#BD6757"}, "R")


            .to("#gearR", {opacity:0, duration:0.2, y:-80})
            .to("#gearN", {opacity:0, duration:0.2, y:-150}, "-=0.1")
            .to("#gearD", {opacity:0, duration:0.2, y:-230}, "-=0.1")

            // .to("#gearR", {opacity:0, duration:0.2, x:-50, delay:1})
            // .to("#gearN", {opacity:0, duration:0.2, x:-50}, "-=0.1")
            // .to("#gearD", {opacity:0, duration:0.2, x:-50}, "-=0.1")
            
            .to("#gear-marker", {opacity:0, duration:0.3, x:-50})
            .to("#gearP", {duration: 0.3, fill: "#BD6757"})
    
export function gearAnimationThree(){
    return gearTLThree;
}
