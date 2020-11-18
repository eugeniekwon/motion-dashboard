import {gsap} from "gsap";

const navigationTL = gsap.timeline();

gsap.set("#navigation", {transformOrigin: "50% 50%"})
gsap.set("#speedometer", {transformOrigin: "50% 50%"})

navigationTL.fromTo("#navigation", {scale:1}, {scale:1.2, duration:0.5}, "nav enter")
            .fromTo("#rectangle-nav", {opacity: 0, y:30}, {opacity:1, y:0, duration:0.5}, "nav enter")
            .fromTo("#speedometer", {scale: 1}, {scale: 0.8, duration:0.8}, "-=0.5")
            .fromTo("#location-icon", {opacity: 0}, {opacity:1, duration:0.3})
            .fromTo("#roads", {opacity: 0}, {opacity:1, duration:0.5})
            .fromTo("#search-icon", {opacity: 0}, {opacity:1, duration:0.3}, "appear")
            .fromTo("#navigation-arrow", {opacity: 0}, {opacity:1, duration:0.3}, "appear")




            
export function navigationAnimation(){
    return navigationTL;
}