import {gsap} from "gsap";

const fuelTL = gsap.timeline();
gsap.set(".fuel", {opacity: 0});
gsap.set("#fuel-indicator", {transformOrigin: "50% 50%"})
            
export function fuelAnimation(){

    fuelTL.fromTo("#fuel-indicator", {opacity:0}, {opacity:1, duration: 0.3}, "speed")
        .from("#fuel-bkgd", {duration: 0.5, drawSVG:"0%", ease:"none"}, "speed")
        .fromTo("#fuel-bkgd-fill", {opacity: 0}, {opacity: 1, duration: 1})
        .fromTo("#f-fuel", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        .fromTo("#fuel-decrease", {opacity: 0}, {opacity: 1, duration:0.5}, "fuel appear")
        .fromTo("#fuel-decrease", {x:0}, {x:15, duration: 7})

    return fuelTL;
}


