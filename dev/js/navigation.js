import {gsap} from "gsap";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";  
gsap.registerPlugin(MotionPathPlugin);


const navigationTL = gsap.timeline();
gsap.set("#navigation", {transformOrigin: "50% 50%"})
gsap.set("#speedometer", {transformOrigin: "50% 50%"})

export function navigationAnimation(){
    navigationTL.fromTo("#navigation", {scale:1}, {scale:1.2, duration:0.5}, "nav enter")
            .fromTo("#rectangle-nav", {opacity: 0, y:30}, {opacity:1, y:0, duration:0.5}, "nav enter")
            .fromTo("#speedometer", {scale: 1}, {scale: 0.8, duration:0.8}, "-=0.5")
            .fromTo("#roads", {opacity: 0}, {opacity:1, duration:0.5})
            .fromTo("#search-icon", {opacity: 0}, {opacity:1, duration:0.3}, "appear")
    return navigationTL;
}


const navigationTLTwo = gsap.timeline();
 // .from("#navigation-arrow", {duration:1.5, ease:"none"})
gsap.set("#nav-arrow",{alpha:0, xPercent:-50, yPercent:-50, transformOrigin: "50% 50%"});

export function navigationAnimationTwo(){
    // navigationTLTwo.to("#nav-arrow",{duration:0.25, alpha:1});
    navigationTLTwo.to("#nav-arrow", {onStart: showDot, duration:8, delay:1.5, motionPath:{path:"#original-path", align:"#original-path", alignOrigin: [0.5, 0.5], autoRotate: true}});
    return navigationTLTwo;
}

function showDot(){
    gsap.set("#nav-arrow",{alpha:1});
}


const navigationTLThree = gsap.timeline();
export function navigationAnimationThree(){
    navigationTLThree.fromTo("#navigation", {scale:1.2}, {scale:1, duration:0.5}, "nav enter")
                        .fromTo("#speedometer", {scale: 0.8}, {scale: 1, duration:0.8}, "-=0.5")
    return navigationTLThree;
}