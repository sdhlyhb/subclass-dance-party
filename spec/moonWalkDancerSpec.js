describe('moonWalkDancer', function() {

  var moonWalkDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    moonWalkDancer = new makeMoonWalkDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(moonWalkDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink and slide', function() {
    sinon.spy(moonWalkDancer.$node, 'toggle');
    moonWalkDancer.step();
    expect(moonWalkDancer.$node.toggle.called).to.be.true;
    expect(moonWalkDancer.left).to.not.be.below(19);
    expect(moonWalkDancer.left).to.not.be.above(121);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(moonWalkDancer, 'step');
      expect(moonWalkDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(moonWalkDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(moonWalkDancer.step.callCount).to.be.equal(2);
    });
  });
});