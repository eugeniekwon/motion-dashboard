import {gsap} from "gsap";

const fuelTL = gsap.timeline();
gsap.set(".fuel", {opacity: 0});
gsap.set("#fuel-indicator", {transformOrigin: "50% 50%"})
            
export function fuelAnimation(){

    fuelTL.fromTo("#fuel-indicator", {opacity:0}, {opacity:1, duration: 0.3}, "speed")
        .from("#fuel-bkgd", {duration: 0.5, drawSVG:"0%", ease:"none"}, "speed")
        .fromTo("#fuel-bkgd-fill", {opacity: 0}, {opacity: 1, duration: 0.3})
        .fromTo("#f-fuel", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        .fromTo("#p-fuel", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
        
        .to(".fuel", {opacity: 1, duration: 0.25, stagger:0.5})
        .to(".fuel", {opacity:0, duration:0.25, stagger:0.5}, "-=3.5")

        
        

    return fuelTL;
}



const fuelTLTwo = gsap.timeline();

fuelTLTwo.fromTo("#fuel-decrease", {opacity: 0}, {opacity: 1, duration:0.3}, "fuel appear")
        .fromTo("#fuel-decrease", {x:0}, {x:20, duration: 5}, "fuel appear")
            

export function fuelAnimationTwo(){
    return fuelTLTwo;
}




// const fuelTLThree = gsap.timeline();

// fuelTLThree.fromTo("#ninetythree-f", {opacity: 1}, {opacity: 0, duration: 0.3}, "appear")
//         .fromTo("#eightynine-f", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
//         .to("#fuel-decrease", {x:14, duration: 0.3, delay:1})

//         .fromTo("#eightynine-f", {opacity: 1}, {opacity: 0, duration: 0.3}, "appear")
//         .fromTo("#eightyfour-f", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
//         .to("#fuel-decrease", {x:16, duration: 0.3})
        

// export function fuelAnimationThree(){
//     return fuelTLThree;
// }




// const fuelTLFour = gsap.timeline();

// fuelTLFour.fromTo("#eightyfour-f", {opacity: 1}, {opacity: 0, duration: 0.3}, "appear")
//         .fromTo("#seventyeight-f", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
//         .to("#fuel-decrease", {x:18, duration: 0.3})
        

// export function fuelAnimationFour(){
//     return fuelTLFour;
// }





// const fuelTLFive = gsap.timeline();

// fuelTLFive.fromTo("#seventyeight-f", {opacity: 1}, {opacity: 0, duration: 0.3}, "appear")
//         .fromTo("#seventytwo-f", {opacity: 0}, {opacity: 1, duration: 0.3}, "appear")
//         .to("#fuel-decrease", {x:20, duration: 0.3})

        
    
// export function fuelAnimationFive(){
//     return fuelTLFive;
// }


