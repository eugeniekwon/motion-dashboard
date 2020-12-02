import {gsap} from "gsap";

const speedometerTL = gsap.timeline();

gsap.set("#speedometer", {transformOrigin: "50% 50%"})

speedometerTL.fromTo("#speedometer", {opacity: 0, scale: 0.5}, {opacity:1, scale:1, duration:0.3}, "-=0.05")
            .fromTo("#tickmark-1", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
            .fromTo("#tickmark-2", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
            .fromTo("#tickmark-3", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
            .fromTo("#tickmark-4", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
            .fromTo("#tickmark-5", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
            .fromTo("#tickmark-6", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
            .fromTo("#tickmark-7", {opacity: 0}, {opacity: 1, ease: 2,duration:0.1}, "-=0.05")
            .fromTo("#tickmark-8", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
            .fromTo("#tickmark-9", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
            .fromTo("#tickmark-10", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
            .fromTo("#tickmark-11", {opacity: 0}, {opacity: 1, ease: 2, duration:0.1}, "-=0.05")
            .fromTo("#speed-zero", {opacity: 0}, {opacity: 1, duration:0.3})
            .fromTo("#mph", {opacity: 0}, {opacity: 1, duration:0.3}, "-=0.05")

            
export function speedometerAnimation(){
    return speedometerTL;
}







const speedometerTLTwo = gsap.timeline();

gsap.set("#speedometer", {transformOrigin: "50% 50%"})

speedometerTLTwo.fromTo("#speed-zero", {opacity: 1}, {opacity:0, duration:0.5}, "to ten")
                .fromTo("#speed-ten", {opacity: 0}, {opacity:1, duration:0.5}, "to ten")
                
                .fromTo("#speed-ten", {opacity: 1}, {opacity:0, duration:0.5}, "to fifteen")
                .fromTo("#speed-fifteen", {opacity: 0}, {opacity:1, duration:0.5}, "to fifteen")

                .fromTo("#speed-fifteen", {opacity: 1}, {opacity:0, duration:0.5}, "to twentyfive")
                .fromTo("#speed-twentyfive", {opacity: 0}, {opacity:1, duration:0.5}, "to twentyfive")



            
export function speedometerAnimationTwo(){
    return speedometerTLTwo;
}





const speedometerTLThree = gsap.timeline();

gsap.set("#speedometer", {transformOrigin: "50% 50%"})

speedometerTLThree.fromTo("#speed-twentyfive", {opacity: 1}, {opacity:0, duration:0.5}, "to thirtyeight")
                    .fromTo("#speed-thirtyeight", {opacity: 0}, {opacity:1, duration:0.5}, "to thirtyeight")

                    .fromTo("#speed-thirtyeight", {opacity: 1}, {opacity:0, duration:0.5}, "to fortyfive")
                    .fromTo("#speed-fortyfive", {opacity: 0}, {opacity:1, duration:0.5}, "to fortyfive")

                    .fromTo("#speed-fortyfive", {opacity: 1}, {opacity:0, duration:0.5}, "to sixty")
                    .fromTo("#speed-sixty", {opacity: 0}, {opacity:1, duration:0.5}, "to sixty")

            
export function speedometerAnimationThree(){
    return speedometerTLThree;
}




const speedometerTLFour = gsap.timeline();

gsap.set("#speedometer", {transformOrigin: "50% 50%"})

speedometerTLFour.fromTo("#speed-sixty", {opacity: 1}, {opacity:0, duration:0.5}, "to seventytwo")
                .fromTo("#speed-seventytwo", {opacity: 0}, {opacity:1, duration:0.5}, "to seventytwo")

            
            
export function speedometerAnimationFour(){
    return speedometerTLFour;
}




const speedometerTLFive = gsap.timeline();

gsap.set("#speedometer", {transformOrigin: "50% 50%"})

speedometerTLFive.fromTo("#speed-seventytwo", {opacity: 1}, {opacity:0, duration:0.5}, "to twentyfive")
                    .fromTo("#speed-twentyfive", {opacity: 0}, {opacity:1, duration:0.5}, "to twentyfive")

                    
            
export function speedometerAnimationFive(){
    return speedometerTLFive;
}





const speedometerTLSix = gsap.timeline();

gsap.set("#speedometer", {transformOrigin: "50% 50%"})

speedometerTLSix.fromTo("#speed-twentyfive", {opacity: 1}, {opacity:0, duration:0.5}, "to thirtyeight")
                    .fromTo("#speed-thirtyeight", {opacity: 0}, {opacity:1, duration:0.5}, "to thirtyeight")

                    
            
export function speedometerAnimationSix(){
    return speedometerTLSix;
}



const speedometerTLSeven = gsap.timeline();

gsap.set("#speedometer", {transformOrigin: "50% 50%"})

speedometerTLSeven.fromTo("#speed-thirtyeight", {opacity: 1}, {opacity:0, duration:0.5}, "to fortyfive")
                    .fromTo("#speed-fortyfive", {opacity: 0}, {opacity:1, duration:0.5}, "to fortyfive")

                    .fromTo("#speed-fortyfive", {opacity: 1}, {opacity:0, duration:0.5}, "to thirtyeight")
                    .fromTo("#speed-thirtyeight", {opacity: 0}, {opacity:1, duration:0.5}, "to thirtyeight")
                    
            
export function speedometerAnimationSeven(){
    return speedometerTLSeven;
}




const speedometerTLEight = gsap.timeline();

gsap.set("#speedometer", {transformOrigin: "50% 50%"})

speedometerTLEight.fromTo("#speed-thirtyeight", {opacity: 1}, {opacity:0, duration:0.5}, "to fortyfive")
                    .fromTo("#speed-fortyfive", {opacity: 0}, {opacity:1, duration:0.5}, "to fortyfive")

                    .fromTo("#speed-fortyfive", {opacity: 1}, {opacity:0, duration:0.5}, "to thirtyeight")
                    .fromTo("#speed-thirtyeight", {opacity: 0}, {opacity:1, duration:0.5}, "to thirtyeight")
                    
            
export function speedometerAnimationEight(){
    return speedometerTLEight;
}




const speedometerTLNine = gsap.timeline();

gsap.set("#speedometer", {transformOrigin: "50% 50%"})

speedometerTLNine.fromTo("#speed-thirtyeight", {opacity: 1}, {opacity:0, duration:0.5}, "to twentyfive")
                .fromTo("#speed-twentyfive", {opacity: 0}, {opacity:1, duration:0.5}, "to twentyfive")

                .fromTo("#speed-thirtyeight", {opacity: 1}, {opacity:0, duration:0.5}, "to twentyfive")
                .fromTo("#speed-twentyfive", {opacity: 0}, {opacity:1, duration:0.5}, "to twentyfive")
                    
            
export function speedometerAnimationNine(){
    return speedometerTLNine;
}



const speedometerTLTen = gsap.timeline();

gsap.set("#speedometer", {transformOrigin: "50% 50%"})

speedometerTLTen.fromTo("#speed-twentyfive", {opacity: 1}, {opacity:0, duration:0.5, delay:1}, "to fifteen")
                .fromTo("#speed-fifteen", {opacity: 0}, {opacity:1, duration:0.5, delay:1}, "to fifteen")

                .fromTo("#speed-fifteen", {opacity: 1}, {opacity:0, duration:0.5, delay:1}, "to ten")
                .fromTo("#speed-ten", {opacity: 0}, {opacity:1, duration:0.5, delay:1}, "to ten")

                .fromTo("#speed-ten", {opacity: 1}, {opacity:0, duration:0.5, delay:2}, "to zero")
                .fromTo("#speed-zero", {opacity: 0}, {opacity:1, duration:0.5, delay:2}, "to zero")
                    
            
export function speedometerAnimationTen(){
    return speedometerTLTen;
}





const speedometerTLEleven = gsap.timeline();

gsap.set("#speedometer", {transformOrigin: "50% 50%"})
gsap.set("#navigation", {transformOrigin: "50% 50%"})
gsap.set("#fuel-indicator", {transformOrigin: "50% 50%"})

speedometerTLEleven.to("#navigation", {scale:0.85, duration:0.5})
                    .to("#speedometer", {scale:1, duration:0.5}, "-=0.3")
                    .to("#fuel-indicator", {scale:0.9, duration:0.5}, "-=0.3")
                    .to("#tickmarks", {opacity:0.3, duration:0.3})

            
export function speedometerAnimationEleven(){
    return speedometerTLEleven;
}
            





// /*
// Change the counter speed for how fast your want your number to go up. 1000 is equal to 1 second

// 1000 = 1 second
// 500 = 1/2 second
// 250 = 1/4 second
// */
// var counterSpeed = 100;

// // Set this number you want your counter to count up to. Default is 20
// var topSpeed = 60;

// // If you don't want your speed to start at 0, change it here. Default is 0.
// var speedNumber = 0;

// var myVar = setInterval(speedCounter, counterSpeed);

// export function speedCounter() {
// 	if (speedNumber < topSpeed) {
// 		speedNumber++;
// 		document.getElementById("speedTag").innerHTML = speedNumber;
// 	} else {
// 		clearInterval(myVar);
// 	}
// 	return speedNumber;
// }
