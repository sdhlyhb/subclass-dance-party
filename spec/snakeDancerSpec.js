describe('snakeDancer', function() {

  var snakeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    snakeDancer = new makeSnakeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(snakeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should not blink but should make a figure 8 snake', function() {
    sinon.spy(snakeDancer.$node, 'toggle');
    snakeDancer.step();
    expect(snakeDancer.$node.toggle.called).to.be.false;
    expect(snakeDancer.left).to.not.be.below(19);
    expect(snakeDancer.left).to.not.be.above(121);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(snakeDancer, 'step');
      expect(snakeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(snakeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(snakeDancer.step.callCount).to.be.equal(2);
    });
  });
});