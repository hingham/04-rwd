'use strict'

$(document).ready(function(){

    let imgSrc = '';
  console.log($('#slide-show-image'));
  $('.slide-show-container').on('click', handleClick);

  var imageArr = ['/images/me.jpg', '/images/me-flowers.jpg', '/images/sailboat.jpg'];

  function handleClick (event){
    event.preventDefault();
    imgSrc = $(this).find('img').attr('src');
    console.log(imgSrc);
    if(imgSrc === imageArr[0]){
      $(this).find('img').attr('src', imageArr[1]).hide().fadeIn();
      console.log(imgSrc);
    }
    else if(imgSrc === imageArr[1]){
      $(this).find('img').attr('src', imageArr[2]).hide().fadeIn();
      console.log(imgSrc);
    }
    else {
      $(this).find('img').attr('src', imageArr[0]).hide().fadeIn();
      console.log(imgSrc.attr);
    }
    console.log(imgSrc);
  }
});


