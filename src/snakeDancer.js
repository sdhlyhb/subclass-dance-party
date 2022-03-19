var makeSnakeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('snakeDancer');
};

makeSnakeDancer.prototype = Object.create(makeDancer.prototype);
makeSnakeDancer.prototype.constructor = makeSnakeDancer;
makeSnakeDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  $('.snakeDancer').animate({ 'left': '-=50px' }, 'slow' );
  $('.snakeDancer').animate({ 'top': '-=50px' }, 'slow' );
  $('.snakeDancer').animate({ 'left': '+=50px' }, 'slow' );
  $('.snakeDancer').animate({ 'top': '-=50px' }, 'slow' );
  $('.snakeDancer').animate({ 'left': '-=50px' }, 'slow' );
  $('.snakeDancer').animate({ 'top': '+=50px' }, 'slow' );
  $('.snakeDancer').animate({ 'left': '+=50px' }, 'slow' );
  $('.snakeDancer').animate({ 'top': '+=50px' }, 'slow' );
};

makeSnakeDancer.prototype.lineUp = function() {



  this.$node.css({
    'top': '60%'
  });
};

// makeSnakeDancer.prototype.emojiFace = function() {
//   this.$node.hover(function() {
//     $(this).append( $( '<span > <img class="manImg" src="emojiImg/flush.png"></img> </span>' ) );
//   }, function() {
//     $( this ).find( 'span' ).remove();
//   });
// };

makeSnakeDancer.prototype.emojiFace = function() {
  this.$node.mouseover(function() {
    $(this).append( $( '<span > <img class="emoji" src="emojiImg/flush.png"></img> </span>' ) );
  });
  this.$node.mouseout(function() {
    $(this).find('span').remove();
  });
};