var makeSnakeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('snakeDancer');
};

makeSnakeDancer.prototype = Object.create(makeDancer.prototype);
makeSnakeDancer.prototype.constructor = makeSnakeDancer;
makeSnakeDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  $('.snakeDancer').animate({ 'left': '-=100px' }, 'slow' );
  $('.snakeDancer').animate({ 'top': '-=100px' }, 'slow' );
  $('.snakeDancer').animate({ 'left': '+=100px' }, 'slow' );
  $('.snakeDancer').animate({ 'top': '-=100px' }, 'slow' );
  $('.snakeDancer').animate({ 'left': '-=100px' }, 'slow' );
  $('.snakeDancer').animate({ 'top': '+=100px' }, 'slow' );
  $('.snakeDancer').animate({ 'left': '+=100px' }, 'slow' );
  $('.snakeDancer').animate({ 'top': '+=100px' }, 'slow' );
};

makeSnakeDancer.prototype.lineUp = function() {
  this.$node.finish();
  this.$node.css({
    'top': '90%'
  });
};