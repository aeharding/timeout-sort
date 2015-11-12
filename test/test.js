import timeoutSort from '../timeoutSort';

var assert = require('assert');


describe('timeoutSort', function() {
  describe('should throw', function() {
    it('passed nothing', function() {
      expect(timeoutSort()).to.throw;
    });
    it('passed String', function() {
      expect(timeoutSort('test')).to.throw;
    });
    it('passed Number', function() {
      expect(timeoutSort(324)).to.throw;
    });
    it('passed Object', function() {
      expect(timeoutSort({})).to.throw;
    });
  });
  describe('sorting', function() {
    it('should return Array', function(done) {
      timeoutSort([], function(arr) {
        expect(arr).to.be.defined;
        expect(arr).to.be.array;
        expect(arr.length).to.equal(0);
        done();
      });
    });
  });
  describe('callback', function() {
    it('should call when complete', function(done) {
      var cb;
      cb = function() {
        cb.should.have.been.called;
        done();
      };
      timeoutSort([], cb);
    });
  });
});