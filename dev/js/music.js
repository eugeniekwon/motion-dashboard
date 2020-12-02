import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


// const musicTL = gsap.timeline();

// gsap.set("#music-bkgd", {transformOrigin: "50% 50%"})
// gsap.set("#music-note", {transformOrigin: "50% 50%"})


// musicTL.fromTo("#music-bkgd", {opacity: 0}, {opacity: 1, duration:0.5}, "music enter")
//         .fromTo("#music-note", {opacity: 0}, {opacity: 1, duration:0.5}, "music enter")

// export function musicAnimation(){
//     return musicTL;
// }



const musicTL = gsap.timeline();

gsap.set("#music-bkgd", {transformOrigin: "50% 50%"})
gsap.set("#music-note", {transformOrigin: "50% 50%"})


musicTL.from("#music-bkgd", {duration: 0.5, drawSVG:"50% 50%", ease:"none"})
        .fromTo("#music-bkgd-fill", {opacity: 0}, {duration: 1, opacity:1}, "show music")
        .fromTo("#music-note", {opacity: 0}, {opacity: 1, duration:0.5}, "show music")

export function musicAnimation(){
    return musicTL;
}






// const musicTLTwo = gsap.timeline();

// gsap.set("#music-bkgd", {transformOrigin: "50% 50%"})
// gsap.set("#music-note", {transformOrigin: "50% 50%"})


// musicTLTwo.fromTo("#music-bkgd", {opacity: 1, scale:1}, {opacity: 0, scale: 0.8, duration:0.5}, "music leave")
//         .fromTo("#music-note", {opacity: 1, scale:1}, {opacity: 0, scale:0.8, duration:0.5}, "music leave")

// export function musicAnimationTwo(){
//     return musicTLTwo;
// }