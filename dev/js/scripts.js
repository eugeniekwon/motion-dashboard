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

// import { speedNumber } from "./speedometer.js";


import {timeAnimationThree} from "./time.js";
import {weatherAnimationThree} from "./weather.js";


import {musicAnimation} from "./music.js";
import {speedometerAnimationThree} from "./speedometer.js";
import {weatherAnimationFour} from "./weather.js";

import {fuelAnimationTwo} from "./fuel.js";
import {timeAnimationFour} from "./time.js";
import {speedometerAnimationFour} from "./speedometer.js";

import {warningAnimation} from "./warning.js";
import {speedometerAnimationFive} from "./speedometer.js";

import {fuelAnimationThree} from "./fuel.js";
import {speedometerAnimationSix} from "./speedometer.js";


import {fuelAnimationFour} from "./fuel.js";
import {fuelAnimationFive} from "./fuel.js";

import {navigationAnimationTwo} from "./navigation.js";
import {timeAnimationFive} from "./time.js";
import {fuelAnimationSix} from "./fuel.js";


// import {musicAnimationTwo} from "./music.js";
// import {weatherAnimationFive} from "./weather.js";

import {speedometerAnimationSeven} from "./speedometer.js";
import {speedometerAnimationEight} from "./speedometer.js";
import {speedometerAnimationNine} from "./speedometer.js";
import {speedometerAnimationTen} from "./speedometer.js";

import {speedometerAnimationEleven} from "./speedometer.js";
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

        .add(speedometerAnimationTwo())
        // .add(speedNumber())

        .add(timeAnimationThree())
        .add(weatherAnimationThree())

        .add(musicAnimation(), "music-speed")
        .add(speedometerAnimationThree(), "music-speed")

        .add(navigationAnimationTwo())
        .add(weatherAnimationFour())

        .add(fuelAnimationTwo())
        .add(timeAnimationFour(), "-=0.3")
        .add(speedometerAnimationFour())

        .add(warningAnimation())
        .add(speedometerAnimationFive(), "-=1.5")

        .add(fuelAnimationThree())
        .add(speedometerAnimationSix())

        .add(fuelAnimationFour())
        .add(speedometerAnimationSeven())

        .add(fuelAnimationFive())
        .add(speedometerAnimationEight())

        
        .add(timeAnimationFive())
        
        .add(fuelAnimationSix())
        

        .add(speedometerAnimationNine())
        .add(speedometerAnimationTen())

        
        // .add(weatherAnimationFive())
        // .add(musicAnimationTwo())

        .add(speedometerAnimationEleven())

        .add(gearAnimationThree())


        .add(logofinalAnimation())
        



GSDevTools.create();