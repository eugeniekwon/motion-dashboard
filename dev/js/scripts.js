import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


import {logoAnimation} from "./logo.js";
import {logocircleAnimation} from "./logo.js";
import {dashboardAnimation} from "./dashboard.js";
import {speedometerAnimation} from "./speedometer.js";
import {weatherAnimation} from "./weather.js";


const mainTL = gsap.timeline();

mainTL.add(logoAnimation())
        .add(logocircleAnimation())
        .add(dashboardAnimation())
        .add(speedometerAnimation())
        .add(weatherAnimation())









GSDevTools.create();