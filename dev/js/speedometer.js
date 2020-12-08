import {gsap} from "gsap";
import {navigationAnimationTwo} from "./navigation.js";



const speedometerTL = gsap.timeline();
 
gsap.set("#speedometer", {transformOrigin: "50% 50%"})
gsap.set("#navigation", {transformOrigin: "50% 50%"})

gsap.set(".tickmark", {opacity: 0});

export function speedometerAnimation(){
// console.log("SPEED");
    speedometerTL.fromTo("#speedometer", {opacity:0, scale:0.5}, {opacity:1, scale: 1, duration: 0.3}, "speed")
                    .fromTo("#tickmark-1", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
                    .fromTo("#tickmark-2", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
                    .fromTo("#tickmark-3", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
                    .fromTo("#tickmark-4", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
                    .fromTo("#tickmark-5", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
                    .fromTo("#tickmark-6", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
                    .fromTo("#tickmark-7", {opacity: 0}, {opacity: 1, ease: 2,duration:0.1}, "-=0.05")
                    .fromTo("#tickmark-8", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
                    .fromTo("#tickmark-9", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
                    .fromTo("#tickmark-10", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
                    .fromTo("#tickmark-11", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")

                    .to("#speed-zero", {opacity:1, duration:0.45})
                    .fromTo("#mph", {opacity:0}, {opacity:1, duration:0.3}, "speed");

    return speedometerTL;
}


export function countUpNumbers(){

    // console.log("count up");

    navigationAnimationTwo();

    const countUpNums = gsap.timeline();
    countUpNums.to(".tickmark", {opacity: 1, duration: 0.45, stagger:0.5, delay:0.7})
                .to(".tickmark", {opacity:0, duration:0.45, stagger:0.5}, "-=3.6")

                // .to(".countown", {opacity: 1, duration: 0.45, stagger:-0.5})
                // .to(".countown", {opacity:0, duration:0.45, stagger:-0.5}, "-=3.5")
}


export function countDownNumbers(){

    // console.log("count up");

    const countDownNums = gsap.timeline();
    countDownNums.to(".countown", {opacity: 1, duration: 0.45, stagger:-0.5})
                .to(".countown", {opacity:0, duration:0.45, stagger:-0.5}, "-=3.5")
}


// function addDelay(){
//     console.log("DELAY");
//     gsap.to("body",{delay:10, onComplete: countUpNumbers});
// }
