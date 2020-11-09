import {gsap} from "gsap";


gsap.set("#logo-wordmark", {transformOrigin: "50% 50%"})

const logoTL = gsap.timeline();

logoTL.from("#logo-wordmark", {opacity: 0, duration: 1})
        .fromTo("#logo-wordmark", {scale: 5}, {duration: 2, scale: 1})
        .fromTo("#logo-circle", {opacity: 0}, {opacity: 1, duration: 2})
        .fromTo("#left-wing", {opacity: 0, x:120}, {opacity: 1, duration: 2, x: 0}, "wing") 
        .fromTo("#right-wing", {opacity: 0, x:-120}, {opacity: 1, duration: 2, x: 0}, "wing"); 

export function logoAnimation(){
    return logoTL;
}

