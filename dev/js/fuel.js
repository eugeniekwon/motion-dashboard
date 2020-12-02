import {gsap} from "gsap";

const fuelTL = gsap.timeline();

fuelTL.from("#fuel-bkgd", {duration: 0.5, drawSVG:"0%", ease:"none"})
        .fromTo("#fuel-bkgd-fill", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        .fromTo("#f-fuel", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        .fromTo("#p-fuel", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        
        .fromTo("#ninetyseven-f", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        .fromTo("#fuel-decrease", {opacity: 0, x:-10}, {opacity: 1, x:0, duration: 0.3})
            
export function fuelAnimation(){
    return fuelTL;
}



const fuelTLTwo = gsap.timeline();

fuelTLTwo.fromTo("#ninetyseven-f", {opacity: 1}, {opacity: 0, duration: 0.3}, "appear")
        .fromTo("#ninetythree-f", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        .to("#fuel-decrease", {x:12, duration: 0.3})
            

export function fuelAnimationTwo(){
    return fuelTLTwo;
}




const fuelTLThree = gsap.timeline();

fuelTLThree.fromTo("#ninetythree-f", {opacity: 1}, {opacity: 0, duration: 0.3}, "appear")
        .fromTo("#eightynine-f", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        .to("#fuel-decrease", {x:14, duration: 0.3, delay:1})

        .fromTo("#eightynine-f", {opacity: 1}, {opacity: 0, duration: 0.3}, "appear")
        .fromTo("#eightyfour-f", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        .to("#fuel-decrease", {x:16, duration: 0.3})
        

export function fuelAnimationThree(){
    return fuelTLThree;
}




const fuelTLFour = gsap.timeline();

fuelTLFour.fromTo("#eightyfour-f", {opacity: 1}, {opacity: 0, duration: 0.3}, "appear")
        .fromTo("#seventyeight-f", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        .to("#fuel-decrease", {x:18, duration: 0.3})
        

export function fuelAnimationFour(){
    return fuelTLFour;
}





const fuelTLFive = gsap.timeline();

fuelTLFive.fromTo("#seventyeight-f", {opacity: 1}, {opacity: 0, duration: 0.3}, "appear")
        .fromTo("#seventytwo-f", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        .to("#fuel-decrease", {x:20, duration: 0.3})

        
    
export function fuelAnimationFive(){
    return fuelTLFive;
}





// const fuelTLSix = gsap.timeline();

// fuelTLSix.fromTo("#seventytwo-f", {opacity: 1}, {opacity: 0, duration: 0.3}, "appear")
//         .fromTo("#sixtyfive-f", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
//         .to("#fuel-decrease", {x:22, duration: 0.3})
        
        
    
// export function fuelAnimationSix(){
//     return fuelTLSix;
// }