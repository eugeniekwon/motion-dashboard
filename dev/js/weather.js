import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const weatherTL = gsap.timeline();


gsap.set("#weather", {transformOrigin: "50% 50%"})

weatherTL.from("#sun", {opacity:0, duration:0.3, x:-50})
            .from("#cloud", {opacity:0, duration:0.2, x:-50}, "-=0.1")
            .from("#snow", {opacity:0, duration:0.2, x:-50}, "-=0.1")
            .from("#fog", {opacity:0, duration:0.2, x:-50}, "-=0.1")
            .from("#weather-marker", {opacity:0, duration:0.3, x:50})
            .to("#sun", {duration: 0.3, fill: "#ECCC76"})
            
export function weatherAnimation(){
    return weatherTL;
}


const weatherTLTwo = gsap.timeline();

gsap.set("#weather", {transformOrigin: "50% 50%"})
gsap.set("#sun", {transformOrigin: "50% 50%"})

weatherTLTwo.to("#weather-marker", {opacity:0, duration:0.5})
            .to("#fog", {opacity:0, duration:0.3, y:2})
            .to("#snow", {opacity:0, duration:0.3, y:2}, "-=0.2")
            .to("#cloud", {opacity:0, duration:0.3, y:-40}, "-=0.2")
            .to("#sun", {scale:1.2, duration: 0.2})
            .from("#glow", {duration: 0.5, drawSVG:"0%", ease:"none"})

export function weatherAnimationTwo(){
    return weatherTLTwo;
}



const weatherTLThree = gsap.timeline();

gsap.set("#weather", {transformOrigin: "50% 50%"})
gsap.set("#snow", {transformOrigin: "50% 50%"})

weatherTLThree.to("#sun", {opacity: 0, scale:1, duration: 0.3}, "weather change")
            .to("#snow", {opacity: 1, fill: "#44617F", duration:0.5, scale: 1.2, y:-10}, "weather change")
            .to("#glow", {stroke: "#6B9CCD", duration:0.3}, "-=0.2")

            
export function weatherAnimationThree(){
    return weatherTLThree;
}






const weatherTLFour = gsap.timeline();

gsap.set("#weather", {transformOrigin: "50% 50%"})
gsap.set("#snow", {transformOrigin: "50% 50%"})

weatherTLFour.to("#snow", {opacity: 0, scale:1, duration: 0.3}, "weather change")
            .to("#sun", {opacity: 1, duration:0.5, scale: 1.2, y:10}, "weather change")
            .to("#glow", {stroke: "#E2B757", duration:0.3}, "-=0.2")

            
export function weatherAnimationFour(){
    return weatherTLFour;
}





// const weatherTLFive = gsap.timeline();

// gsap.set("#sun", {transformOrigin: "50% 50%"})

// weatherTLFive.to("#sun", {opacity: 0, scale:1, fill:"#222", duration: 0.3})
//             .to("#glow", {opacity: 0, duration:0.3})

            
// export function weatherAnimationFive(){
//     return weatherTLFive;
// }