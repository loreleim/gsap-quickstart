const cardsContainer = document.querySelector(".cards-container");

// Duplicate the cards (for wrapping purposes)
cardsContainer.innerHTML += cardsContainer.innerHTML;

// Get the DOM references
const cards = gsap.utils.toArray(".card-project");

function setAnimValues() {
  // Get the correct width
  const cardWidth = innerWidth / (cards.length / 2);
  
  // Set the default position
  cards.forEach((card, i) => 
    gsap.set(card, {
      x: () => i * cardWidth,
      overwrite: "auto"
    })
  );

  var timelineOne = gsap.timeline({repeat: 2});
  
  // Animate the cards
  timelineOne.to(cards, {
    duration: 100,
    ease: "none",
    x: `+=${innerWidth}`,
    // Wrap the cards when appropriate
    modifiers: {
      x: gsap.utils.unitize(gsap.utils.wrap(-cardWidth, innerWidth * 2 - cardWidth), "px")
    },
  });
}

// Make sure it works on resize
window.addEventListener("resize", setAnimValues);
setAnimValues();

/*gsap.set(".box", {
  x: (i) => i * 120
})

var timelineOne = gsap.timeline({repeat: -1});

timelineOne.to(".box", {
  duration: 20,
  ease: "none",
  x: "+=200", //move each box 500px to right
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
  },
})

/* Below are non GSAP things */

/*gsap.to(".box", {
  duration: 20,
  ease: "none",
  x: "+=500", //move each box 500px to right
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
  },
  repeat: -1,
});*/

/*gsap.to(".test", {
  duration: 20,
  ease: "none",
  x: "+=500", //move each box 500px to right
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
  },
  repeat: -1,
  start: "-100 center"
});*/
