import {gsap} from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";
// gsap.registerPlugin(GSDevTools);

import {logoAnimation, logocircleAnimation} from "./logo.js";
import {speedometerAnimation} from "./speedometer.js";
import {weatherAnimation, weatherAnimationTwo, weatherAnimationThree, weatherAnimationFour} from "./weather.js";
import {gearAnimation, gearAnimationTwo, gearAnimationThree} from "./gear.js";
import {navigationAnimation} from "./navigation.js";
import {timeAnimation} from "./time.js";
import {fuelAnimation, fuelAnimationTwo} from "./fuel.js";
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
        .add(navigationAnimation())
        .add(timeAnimation())
        .add(fuelAnimation(), "-=3")
        .add(fuelAnimationTwo(), "-=3")
        .add(musicAnimation(),"-=2")
        .add(weatherAnimationThree(),"-=2")
        .add(warningAnimation())
        .add(weatherAnimationFour())
        .add(gearAnimationThree(), "-=0.5")
        .add(logofinalAnimation(), "-=0.5")


// GSDevTools.create();

