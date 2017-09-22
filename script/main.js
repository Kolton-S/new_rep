(function() {
  var theImages = document.querySelectorAll('.image-holder'),
  theHeading = document.querySelector('.heading'),
  theSubhead = document.querySelector('.main-copy h2'),
  theSeasonText = document.querySelector('.main-copy p'),
  appliedClass;

  function ChangeElements(){
    //make sure event handling is working
    debugger;
  }

  theImages.forEach(function(element, index){
    //Loop through the images and add event handling to each one
    element.addEventListener('click', ChangeElements, false);
  })
})();
