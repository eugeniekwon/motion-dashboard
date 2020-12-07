import {gsap} from "gsap";

const timeTL = gsap.timeline();

gsap.set("#time", {transformOrigin: "50% 50%"});
gsap.set(".clock", {opacity: 0});
        
 
export function timeAnimation(){
    timeTL.fromTo("#time", {opacity:0}, {opacity:1, duration: 0.3}, "speed")
            .fromTo("#PM", {opacity:0}, {opacity:1, duration:0.3}, "speed")
            .to(".clock", {opacity: 1, duration:0.45, stagger:0.25}, "-=0.3")
            .to(".clock", {opacity:0, duration:0.45, stagger:0.25})
            // .addPause(["5"])
            // .addPause("stay")

    return timeTL;
}
