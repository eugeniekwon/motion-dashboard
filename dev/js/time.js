import {gsap} from "gsap";

const timeTL = gsap.timeline();

gsap.set("#time", {transformOrigin: "50% 50%"})

timeTL.fromTo("#twelvefive", {opacity:0}, {opacity:1, duration:1})

export function timeAnimation(){
    return timeTL;
}




const timeTLTwo = gsap.timeline();

timeTLTwo.fromTo("#twelvefive", {opacity:1}, {opacity:0, duration:1}, "clock")
timeTLTwo.fromTo("#twelvesix", {opacity:0}, {opacity:1, duration:1}, "clock")

export function timeAnimationTwo(){
    return timeTLTwo;
}





const timeTLThree= gsap.timeline();

timeTLThree.fromTo("#twelvesix", {opacity:1}, {opacity:0, duration:1}, "clock")
timeTLThree.fromTo("#twelveseven", {opacity:0}, {opacity:1, duration:1}, "clock")

export function timeAnimationThree(){
    return timeTLThree;
}




// const timeTLFour= gsap.timeline();

// timeTLFour.fromTo("#twelveseven", {opacity:1}, {opacity:0, duration:1}, "clock")
// timeTLFour.fromTo("#twelveeight", {opacity:0}, {opacity:1, duration:1}, "clock")

// export function timeAnimationFour(){
//     return timeTLFour;
// }



// const timeTLFive= gsap.timeline();

// timeTLFive.fromTo("#twelveeight", {opacity:1}, {opacity:0, duration:1}, "clock")
// timeTLFive.fromTo("#twelvenine", {opacity:0}, {opacity:1, duration:1}, "clock")

// export function timeAnimationFive(){
//     return timeTLFive;
// }