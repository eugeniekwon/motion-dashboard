import {gsap} from "gsap";

const fuelTL = gsap.timeline();

fuelTL.fromTo("#fuel-bkgd", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        .fromTo("#f-fuel", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        .fromTo("#p-fuel", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        
        .fromTo("#ninetyseven-f", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        .fromTo("#fuel-decrease", {opacity: 0, x:-10}, {opacity: 1, x:0, duration: 0.3})
            
export function fuelAnimation(){
    return fuelTL;
}