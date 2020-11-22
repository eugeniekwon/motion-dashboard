import {gsap} from "gsap";

const logofinalTL = gsap.timeline();

gsap.set("#small-logo", {transformOrigin: "50% 50%"})

logofinalTL.fromTo("#small-logo", {opacity: 0, scale: 0.5}, {opacity:1, scale:1, duration:0.3})

            
export function logofinalAnimation(){
    return logofinalTL;
}

