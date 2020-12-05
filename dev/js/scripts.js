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


import {musicAnimation} from "./music.js";
import {speedometerAnimationThree} from "./speedometer.js";
import {weatherAnimationThree} from "./weather.js";


import {fuelAnimationTwo} from "./fuel.js";
import {timeAnimationFour} from "./time.js";
import {speedometerAnimationFour} from "./speedometer.js";

import {warningAnimation} from "./warning.js";
import {speedometerAnimationFive} from "./speedometer.js";

import {fuelAnimationThree} from "./fuel.js";
import {speedometerAnimationSix} from "./speedometer.js";
import {weatherAnimationFour} from "./weather.js";

import {fuelAnimationFour} from "./fuel.js";
import {fuelAnimationFive} from "./fuel.js";

// import {navigationAnimationTwo} from "./navigation.js";
import {timeAnimationFive} from "./time.js";

import {speedometerAnimationSeven} from "./speedometer.js";
import {speedometerAnimationEight} from "./speedometer.js";

import {gearAnimationThree} from "./gear.js";
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
        .add(fuelAnimation())
        .add(timeAnimationTwo())

        .add(speedometerAnimationTwo(), "-=1")
        .add(timeAnimationThree())
        
        .add(musicAnimation(), "music-speed")
        .add(speedometerAnimationThree(), "music-speed")
        .add(weatherAnimationThree())

        .add(fuelAnimationTwo())
        .add(timeAnimationFour(), "-=0.3")
        .add(speedometerAnimationFour())

        .add(warningAnimation())
        .add(speedometerAnimationFive(), "-=1.5")

        .add(fuelAnimationThree(), "fuel-speed-2")
        .add(speedometerAnimationSix(), "fuel-speed-2")
        .add(weatherAnimationFour())

        .add(fuelAnimationFour())
        .add(speedometerAnimationSeven())

        .add(fuelAnimationFive())
        
        .add(timeAnimationFive())
        .add(speedometerAnimationEight(), "-=1")

        .add(gearAnimationThree(), "-=0.5")

        .add(logofinalAnimation(), "-=0.5")
        //.add(navigationAnimationTwo())
        


// const navMainTL = gsap.timeline();

// navMainTL.add(navigationAnimationTwo())




GSDevTools.create();
