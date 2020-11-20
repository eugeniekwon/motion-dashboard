import {gsap} from "gsap";

const musicTL = gsap.timeline();

gsap.set("#music-bkgd", {transformOrigin: "50% 50%"})
gsap.set("#music-note", {transformOrigin: "50% 50%"})


gsap.set("#weather", {transformOrigin: "50% 50%"})
gsap.set("#snow", {transformOrigin: "50% 50%"})


musicTL.fromTo("#music-bkgd", {opacity: 0}, {opacity: 1, duration:0.5}, "music enter")
        .fromTo("#music-note", {opacity: 0}, {opacity: 1, duration:0.5}, "music enter")

export function musicAnimation(){
    return musicTL;
}