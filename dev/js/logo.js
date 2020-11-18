import {gsap} from "gsap";

//logo wordmark forming

gsap.set("#logo-wordmark", {transformOrigin: "50% 50%"})

const logoTL = gsap.timeline();

logoTL.fromTo("#logo-m", {opacity: 0, x: -10}, {opacity: 1, duration: 0.8, x: 0}, "wordmark")
        .fromTo("#logo-i", {opacity: 0, x: -5}, {opacity: 1, duration: 0.8, x: 0}, "wordmark")
        .fromTo("#logo-n", {opacity: 0, x: 5}, {opacity: 1, duration: 0.8, x: 0}, "wordmark")
        .fromTo("#logo-ii", {opacity: 0, x: 10}, {opacity: 1, duration: 0.8, x: 0}, "wordmark")
        .fromTo("#logo-wordmark", {scale: 3}, {duration: 0.8, scale: 1}, "-=0.5")
        .fromTo("#logo-circle", {opacity: 0}, {opacity: 1, duration: 0.5})
        .fromTo("#left-wing", {x:127}, {opacity: 1, duration: 0.5, x: 0}, "wing") 
        .fromTo("#right-wing", {x:127}, {opacity: 1, duration: 0.5, x: 250}, "wing"); 

export function logoAnimation(){
    return logoTL;
}


//logo wordmark into a small circle

const logocircleTL = gsap.timeline();

gsap.set("#logo-circle", {transformOrigin: "50% 50%"})
gsap.set("#white-circle-bkgd", {transformOrigin: "50% 50%"})

logocircleTL.to("#left-wing", {opacity: 0, duration: 0.1}, "wing") 
            .to("#right-wing", {opacity: 0, duration: 0.1}, "wing")

            .to("#logo-wordmark", {opacity: 0, duration: 0.4})
            .to("#logo-circle", {scale: 0.2, opacity: 0, duration: 0.4}, "on")
            .to("#white-circle-bkgd", {scale: 0.2, opacity: 0, duration: 0.4}, "on")

            .fromTo("#dashboard-total", {backgroundColor: "#ffffff"}, {backgroundColor: "#000000", duration:0.5}, "-=0.2")
            .fromTo("#dashboard-body", {opacity:0}, {opacity:1, duration:0.5}, "-=0.2")




export function logocircleAnimation(){
    return logocircleTL;
}