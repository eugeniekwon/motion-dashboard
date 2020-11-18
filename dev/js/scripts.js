import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


import {logoAnimation} from "./logo.js";
import {logocircleAnimation} from "./logo.js";
import {dashboardAnimation} from "./dashboard.js";
import {speedometerAnimation} from "./speedometer.js";
import {weatherAnimation} from "./weather.js";
import {gearAnimation} from "./gear.js";
import {weatherAnimationTwo} from "./weather.js";
import {gearAnimationTwo} from "./gear.js";
import {navigationAnimation} from "./navigation.js";
import {timeAnimation} from "./time.js";
import {fuelAnimation} from "./fuel.js";
import {timeAnimationTwo} from "./time.js";


const mainTL = gsap.timeline();

mainTL.add(logoAnimation())
        .add(logocircleAnimation())
        .add(dashboardAnimation())
        .add(speedometerAnimation())
        .add(weatherAnimation())
        .add(gearAnimation())
        .add(weatherAnimationTwo())
        .add(gearAnimationTwo())
        .add(navigationAnimation())
        .add(timeAnimation())
        .add(fuelAnimation())
        .add(timeAnimationTwo())









GSDevTools.create();