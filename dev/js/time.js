import {gsap} from "gsap";

const timeTL = gsap.timeline();

gsap.set("#time", {transformOrigin: "50% 50%"});
gsap.set(".clock", {opacity: 0});
        
 
export function timeAnimation(){
    timeTL.to("#twelvefive", {opacity:1, duration:0.5}, "time")
            .fromTo("#PM", {opacity:0}, {opacity:1, duration:0.5}, "time")
            

    return timeTL;
}

