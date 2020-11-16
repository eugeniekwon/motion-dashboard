import {gsap} from "gsap";

const weatherTL = gsap.timeline();

gsap.set("#weather", {transformOrigin: "50% 50%"})

weatherTL.from("#sun", {opacity:0, duration:0.3, x:-50})
            .from("#cloud", {opacity:0, duration:0.3, x:-50}, "-=0.1")
            .from("#snow", {opacity:0, duration:0.3, x:-50}, "-=0.1")
            .from("#fog", {opacity:0, duration:0.3, x:-50}, "-=0.1")
            .from("#weather-marker", {opacity:0, duration:0.5, x:50})
            .to("#sun", {duration: 0.3, fill: "#ECCC76"})
            
export function weatherAnimation(){
    return weatherTL;
}

