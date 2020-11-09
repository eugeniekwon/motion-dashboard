import {gsap} from "gsap";


import {logoAnimation} from "./logo.js";
import {logocircleAnimation} from "./logo.js";

const mainTL = gsap.timeline();

mainTL.add(logoAnimation())
        .add(logocircleAnimation())
