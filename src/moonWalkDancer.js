var makeMoonWalkDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('moonWalkDancer');
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

  this.$node.css({
    'top': '10%'
  });
};