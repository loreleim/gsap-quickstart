gsap.to(".first", {delay: .6, left: "-100%", ease: Expo.easeInOut })
gsap.to(".second", {delay: .9, left: "-100%", ease: Expo.easeInOut })
gsap.to(".third", {delay: 1, left: "-100%", ease: Expo.easeInOut })

var timelineOne = gsap.timeline();
timelineOne.to(".square", {duration: 0.4, y:50, ease:"circ.in", repeat:6, yoyo:true})
timelineOne.to(".square", {duration: 1, scale: 1.5 , ease: Expo.easeInOut})
timelineOne.to(".square", {duration: .5, rotation: 180, scale: 50, ease: Expo.easeInOut})
timelineOne.to(".square", {duration: 1, opacity: 0, ease: Expo.easeOut})
timelineOne.to(".mainContainer", {duration: 1, opacity: 0, ease: Expo.easeOut}, "<")
