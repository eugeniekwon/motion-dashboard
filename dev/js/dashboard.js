import {gsap} from "gsap";

const dashboardTL = gsap.timeline();

dashboardTL.fromTo("#dashboard-total", {backgroundColor: "#ffffff"}, {backgroundColor: "#000000"})

export function dashboardAnimation(){
    return dashboardTL;
}