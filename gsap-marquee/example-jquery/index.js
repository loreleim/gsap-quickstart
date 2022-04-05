(function($){

  var initializeBlock = function( $block ) {

    /* Function: Pollinate */
    var tickerContainer = $block.find(".pol-ticker__individualRow");

    $(tickerContainer).html($(tickerContainer.html()));

    const logos = gsap.utils.toArray(".pol-ticker__clientLogo");

    function setAnimation() {

      //Grab Window Width for Responsiveness
      var windowWidth = $(window).width();
      const childWidth = windowWidth / (logos.length / 2);

      // Set the default position
      logos.forEach((logo, i) => 
        gsap.set(logo, {
          x: () => i * childWidth,
          overwrite: "auto"
        })
      );

      //Define Timeline
      var timelineOne = gsap.timeline({repeat: 2});

      const wrapDetails = gsap.utils.unitize(gsap.utils.wrap(-childWidth, (windowWidth * 2) - childWidth));

      // Animate the cards
      timelineOne.to(logos, {
        duration: 10,
        ease: "none",
        x: `+=${windowWidth}`,
        modifiers: {
          x: wrapDetails
        },
      });

    }

    window.addEventListener("resize", setAnimation);
    setAnimation();

  }

  // Window Initialized
  $(document).ready(function(){
    initializeBlock( $(this) );
  });

})(jQuery);