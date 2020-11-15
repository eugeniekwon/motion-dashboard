import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


import {logoAnimation} from "./logo.js";
import {logocircleAnimation} from "./logo.js";

const mainTL = gsap.timeline();

mainTL.add(logoAnimation())
        .add(logocircleAnimation())









GSDevTools.create();