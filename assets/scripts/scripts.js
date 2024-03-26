// making the page refresh whenever the window width is below 991.98 because the below code in the same size will work perfectly otherwise the classList.remove('slide') is not working, have to refresh everytime some one changes the window width so added this event listener

// Add an event listener to detect window resize
window.addEventListener('resize', function() {

  // Check if the inner width of the window is less than 991.98 pixels
  if (window.innerWidth < 991.98) {

      // If condition is met, reload the page
      location.reload();
  }
});

// Home page carousel functionality for devices with a minimum width of 576px
if (window.matchMedia("(min-width:576px)").matches) {
  // Select the carousel container
  const allCarouselItem = document.getElementById('carouselExampleControls');

  // Remove the 'slide' class from the carousel container
  allCarouselItem.classList.remove("slide");
  
  // Selects the carousel inner container, individual carousel items, and calculate the width of a single card
  var carouselInner = document.querySelector('.carousel-inner');
  var carouselItems = document.querySelectorAll('.carousel-item');
  var cardWidth = carouselItems[0].offsetWidth;
  var scrollCorPos = 0;

  // adds event listener for the next button click
  document.querySelector('.carousel-control-next').addEventListener('click', function () {

    // Checks if scrolling position is less than the maximum allowed position
    if (scrollCorPos < (carouselInner.scrollWidth - (cardWidth * 6))) {

      // Increment scrolling position by card width
      scrollCorPos += cardWidth;

      // Scroll to the new position with smooth behavior
      carouselInner.scrollTo({ left: scrollCorPos, behavior: 'smooth' });
    }
  });

  // Adds event listener for the previous button click
  document.querySelector('.carousel-control-prev').addEventListener('click', function () {

    // Checks if scrolling position is greater than 0
    if (scrollCorPos > 0) {

      // Decrement scrolling position by card width
      scrollCorPos -= cardWidth;
      
      // Scroll to the new position with smooth behavior
      carouselInner.scrollTo({ left: scrollCorPos, behavior: 'smooth' });
    }
  });
}

