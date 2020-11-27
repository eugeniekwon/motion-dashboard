import {gsap} from "gsap";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";  
gsap.registerPlugin(MotionPathPlugin);


const navigationTL = gsap.timeline();

gsap.set("#navigation", {transformOrigin: "50% 50%"})
gsap.set("#speedometer", {transformOrigin: "50% 50%"})

navigationTL.fromTo("#navigation", {scale:1}, {scale:1.2, duration:0.5}, "nav enter")
            .fromTo("#rectangle-nav", {opacity: 0, y:30}, {opacity:1, y:0, duration:0.5}, "nav enter")
            .fromTo("#speedometer", {scale: 1}, {scale: 0.8, duration:0.8}, "-=0.5")
            .fromTo("#location-icon", {opacity: 0}, {opacity:1, duration:0.3})
            .fromTo("#roads", {opacity: 0}, {opacity:1, duration:0.5})
            .fromTo("#search-icon", {opacity: 0}, {opacity:1, duration:0.3}, "appear")
            .fromTo("#nav-arrow", {opacity: 0}, {opacity:1, duration:0.3}, "appear")




            
export function navigationAnimation(){
    return navigationTL;
}





const navigationTLTwo = gsap.timeline();
gsap.set("#nav-arrow", {xPercent:-50, yPercent:-50, transformOrigin: "50% 50%"})

navigationTLTwo.to("#nav-arrow", {duration:20, motionPath:{path:"#original-path", align:"#original-path", alignOrigin: [0.5, 0.5], autoRotate: true}})
        // .from("#navigation-arrow", {duration:1.5, ease:"none"})


export function navigationAnimationTwo(){
    return navigationTLTwo;
}

