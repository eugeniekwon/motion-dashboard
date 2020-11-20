import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


import {logoAnimation} from "./logo.js";
import {logocircleAnimation} from "./logo.js";

import {speedometerAnimation} from "./speedometer.js";
import {weatherAnimation} from "./weather.js";
import {gearAnimation} from "./gear.js";
import {weatherAnimationTwo} from "./weather.js";
import {gearAnimationTwo} from "./gear.js";
import {navigationAnimation} from "./navigation.js";
import {timeAnimation} from "./time.js";
import {fuelAnimation} from "./fuel.js";
import {timeAnimationTwo} from "./time.js";
import {speedometerAnimationTwo} from "./speedometer.js";

import {timeAnimationThree} from "./time.js";
import {weatherAnimationThree} from "./weather.js";
import {warningAnimation} from "./warning.js";

import {musicAnimation} from "./music.js";
import {speedometerAnimationThree} from "./speedometer.js";
import {weatherAnimationFour} from "./weather.js";


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
        .add(fuelAnimation())
        .add(timeAnimationTwo())
        .add(speedometerAnimationTwo())

        .add(timeAnimationThree())
        .add(weatherAnimationThree())
        .add(warningAnimation())


        .add(musicAnimation(), "music-speed")
        .add(speedometerAnimationThree(), "music-speed")
        .add(weatherAnimationFour())

        









GSDevTools.create();