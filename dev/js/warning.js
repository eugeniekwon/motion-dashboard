import {gsap} from "gsap";

const warningTL = gsap.timeline();

gsap.set("#warning-panel", {transformOrigin: "50% 50%"})

warningTL.fromTo("#warning-panel", {visibility:"hidden", scale:1}, {visibility:"visible", scale: 2.5, x: 350, y: 150, duration:0.001})
        .to("#warning-rectangle", {borderRadius:0, duration: 0.3})
        .to("#warning-panel", {visibility:"hidden", delay: 1, duration:1})

export function warningAnimation(){
    return warningTL;
}