import {gsap} from "gsap";

//logo wordmark forming

gsap.set("#logo-wordmark", {transformOrigin: "50% 50%"})

const logoTL = gsap.timeline();

logoTL.fromTo("#logo-m", {opacity: 0, x: -10}, {opacity: 1, duration: 1, x: 0}, "wordmark")
        .fromTo("#logo-i", {opacity: 0, x: -5}, {opacity: 1, duration: 1, x: 0}, "wordmark")
        .fromTo("#logo-n", {opacity: 0, x: 5}, {opacity: 1, duration: 1, x: 0}, "wordmark")
        .fromTo("#logo-ii", {opacity: 0, x: 10}, {opacity: 1, duration: 1, x: 0}, "wordmark")
        .fromTo("#logo-wordmark", {scale: 3}, {duration: 1, scale: 1}, "-=0.5")
        .fromTo("#logo-circle", {opacity: 0}, {opacity: 1, duration: 1})
        .fromTo("#left-wing", {opacity: 0, x:120}, {opacity: 1, duration: 1, x: 0}, "wing") 
        .fromTo("#right-wing", {opacity: 0, x:-120}, {opacity: 1, duration: 1, x: 0}, "wing"); 

export function logoAnimation(){
    return logoTL;
}


//logo wordmark into a small circle

const logocircleTL = gsap.timeline();

gsap.set("#logo-circle", {transformOrigin: "50% 50%"})

logocircleTL.to("#left-wing", {opacity: 0, duration: 0.2}, "wing") 
            .to("#right-wing", {opacity: 0, duration: 0.2}, "wing")

            .to("#logo-wordmark", {opacity: 0, duration: 0.5})
            .to("#logo-circle", {scale: 0.2, duration: 0.5}, "-=0.3")


export function logocircleAnimation(){
    return logocircleTL;
}