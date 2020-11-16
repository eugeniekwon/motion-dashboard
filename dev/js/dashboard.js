import {gsap} from "gsap";

const dashboardTL = gsap.timeline();

dashboardTL.fromTo("#dashboard-total", {backgroundColor: "#ffffff"}, {backgroundColor: "#000000"}, "on")
            .fromTo("#dashboard-body", {opacity:0}, {opacity:1}, "on")
            

export function dashboardAnimation(){
    return dashboardTL;
}