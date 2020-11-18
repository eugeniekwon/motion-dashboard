import {gsap} from "gsap";

const speedometerTL = gsap.timeline();

gsap.set("#speedometer", {transformOrigin: "50% 50%"})

speedometerTL.fromTo("#speedometer", {opacity: 0, scale: 0.5}, {opacity:1, scale:1, duration:0.3}, "-=0.05")
            .fromTo("#tickmark-1", {opacity: 0}, {opacity: 1, ease: 2, duration:0.2}, "-=0.05")
            .fromTo("#tickmark-2", {opacity: 0}, {opacity: 1, ease: 2, duration:0.2}, "-=0.05")
            .fromTo("#tickmark-3", {opacity: 0}, {opacity: 1, ease: 2, duration:0.2}, "-=0.05")
            .fromTo("#tickmark-4", {opacity: 0}, {opacity: 1, ease: 2, duration:0.2}, "-=0.05")
            .fromTo("#tickmark-5", {opacity: 0}, {opacity: 1, ease: 2, duration:0.2}, "-=0.05")
            .fromTo("#tickmark-6", {opacity: 0}, {opacity: 1, ease: 2, duration:0.2}, "-=0.05")
            .fromTo("#tickmark-7", {opacity: 0}, {opacity: 1, ease: 2,duration:0.2}, "-=0.05")
            .fromTo("#tickmark-8", {opacity: 0}, {opacity: 1, ease: 2, duration:0.2}, "-=0.05")
            .fromTo("#tickmark-9", {opacity: 0}, {opacity: 1, ease: 2, duration:0.2}, "-=0.05")
            .fromTo("#tickmark-10", {opacity: 0}, {opacity: 1, ease: 2, duration:0.2}, "-=0.05")
            .fromTo("#tickmark-11", {opacity: 0}, {opacity: 1, ease: 2, duration:0.2}, "-=0.05")
            .fromTo("#speed-zero", {opacity: 0}, {opacity: 1, duration:0.5})
            .fromTo("#mph", {opacity: 0}, {opacity: 1, duration:0.5}, "-=0.05")

            
export function speedometerAnimation(){
    return speedometerTL;
}







const speedometerTLTwo = gsap.timeline();

gsap.set("#speedometer", {transformOrigin: "50% 50%"})

speedometerTLTwo.fromTo("#speed-zero", {opacity: 1}, {opacity:0, duration:0.5}, "to ten")
                .fromTo("#speed-ten", {opacity: 0}, {opacity:1, duration:0.5}, "to ten")
                
                .fromTo("#speed-ten", {opacity: 1}, {opacity:0, duration:0.5}, "to fifteen")
                .fromTo("#speed-fifteen", {opacity: 0}, {opacity:1, duration:0.5}, "to fifteen")

                .fromTo("#speed-fifteen", {opacity: 1}, {opacity:0, duration:0.5}, "to twentyfive")
                .fromTo("#speed-twentyfive", {opacity: 0}, {opacity:1, duration:0.5}, "to twentyfive")



            
export function speedometerAnimationTwo(){
    return speedometerTLTwo;
}