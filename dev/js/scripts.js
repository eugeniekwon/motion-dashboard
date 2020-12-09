import {gsap} from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";
// gsap.registerPlugin(GSDevTools);

import {logoAnimation, logocircleAnimation} from "./logo.js";
import {speedometerAnimation} from "./speedometer.js";
import {weatherAnimation, weatherAnimationTwo, weatherAnimationThree, weatherAnimationFour} from "./weather.js";
import {gearAnimation, gearAnimationTwo, gearAnimationThree} from "./gear.js";
import {navigationAnimation, navigationAnimationThree} from "./navigation.js";
import {timeAnimation} from "./time.js";
import {fuelAnimation} from "./fuel.js";
import {musicAnimation} from "./music.js";
import {warningAnimation} from "./warning.js";
import {logofinalAnimation} from "./logofinal.js";

const mainTL = gsap.timeline();

mainTL.add(logoAnimation())
        .add(logocircleAnimation())
        .add(speedometerAnimation())
        .add(weatherAnimation(), "weather-gear")
        .add(gearAnimation(), "weather-gear")
        .add(weatherAnimationTwo(), "weather-gear-2")
        .add(gearAnimationTwo(), "weather-gear-2")
        .add(navigationAnimation(), "nav")
        .add(fuelAnimation(), "nav")
        .add(timeAnimation(), "nav")
        .add(weatherAnimationThree(), "-=7")
        .add(musicAnimation(),"-=10")
        .add(warningAnimation(), "-=5")
        .add(weatherAnimationFour(), "-=5")
        .add(gearAnimationThree(), "-=0.5")
        .add(navigationAnimationThree(), "-=0.5")
        .add(logofinalAnimation(), "-=0.5")



// GSDevTools.create();

