var makeMoonWalkDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node.addClass('moonWalkDancer');
  //this.changeColor();
};

makeMoonWalkDancer.prototype = Object.create(makeDancer.prototype);
makeMoonWalkDancer.prototype.constructor = makeMoonWalkDancer;
makeMoonWalkDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle(function() {
    $( '.moonWalkDancer' ).animate({ 'left': '+=100px' }, 'slow' );
    $( '.moonWalkDancer' ).animate({ 'left': '-=100px' }, 'slow' );
  });
};

makeMoonWalkDancer.prototype.lineUp = function() {

  this.$node.finish();
  this.$node.css({
    'top': '10%'
  });
};
// makeMoonWalkDancer.prototype.emojiFace = function() {
//   this.$node.hover(function() {
//     $(this).append( $( '<span > <img class="manImg" src="emojiImg/smileyHeart.png"></img> </span>' ) );
//   }, function() {
//     $( this ).find( 'span' ).remove();
//   });
// };

makeMoonWalkDancer.prototype.emojiFace = function() {
  this.$node.mouseover(function() {
    $(this).append( $( '<span > <img class="emoji" src="emojiImg/smileyHeart.png"></img> </span>' ) );
  });
  this.$node.mouseout(function() {
    $(this).find('span').remove();
  });
};
