/*Old Syntax*/
/*TweenMax.from(".mainContainer", .6, {
    delay: 0.6,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".heroText", 1, {
    opacity: 0,
    ease: Expo.easeInOut
})*/

/*New Syntax*/
gsap.to(".mainContainer", { duration: 2, opacity: 1, width: "100%", ease: Expo.easeInOut});