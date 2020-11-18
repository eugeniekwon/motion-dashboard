import {gsap} from "gsap";

const fuelTL = gsap.timeline();

fuelTL.fromTo("#fuel-bkgd", {opacity: 0}, {opacity: 1})
        .fromTo("#f-fuel", {opacity: 0}, {opacity: 1})
        .fromTo("#p-fuel", {opacity: 0}, {opacity: 1})
        
        .fromTo("#ninetyseven-f", {opacity: 0}, {opacity: 1})
        .fromTo("#fuel-decrease", {opacity: 0, x:-10}, {opacity: 1, x:0})
            
export function fuelAnimation(){
    return fuelTL;
}