import {gsap} from "gsap";


const logoTL = gsap.timeline();

// logoTL.to("#mosquito", {duration:3, motionPath:"#mosquito-path", autoRotate:true})
//         .from("#mosquito", {duration:1.5, scale: 0.3, ease:"none"})
//         //  .from("#mosquito", {duration:3, x:-10, y:10, rotation:360, ease:"none"})
//         //  .to("#mosquito", {duration:3, x:100, y:200}, "-=3")

export function logoAnimation(){
    return logoTL;
}
