import {gsap} from "gsap";

const warningTL = gsap.timeline();

gsap.set("#warning", {transformOrigin: "50% 50%"})

warningTL.fromTo("#warning-panel", {opacity:0, scale:1}, {opacity:1, scale: 2.5, x: 350, y: 150, duration:0.01})
        // .to("#warning-rectangle", {radius:0, duration: 0.3})

export function warningAnimation(){
    return warningTL;
}