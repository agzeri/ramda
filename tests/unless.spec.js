import chai, { expect } from 'chai';
import sinon from 'sinon';
import sc from 'sinon-chai';

chai.use(sc);

import forEach from '../src/forEach';
import unless from '../src/unless';

describe('unless :: High Order Function', () => {
  it('should be a function', () => {
    expect(unless).to.be.a('function');
  });

  it('should accept two parameters', () => {
    expect(() => { unless(); }).to.throw('Invalid: You should provide two parameters (predicate, function).');
  });

  it('should callback have been called when first param is an expression', () => {
    const done = sinon.spy();

    unless(1 > 2, done);

    expect(done).to.have.been.calledOnce;
  });

  it('should accept a function in first parameter', () => {
    const isEven = number => number % 2 === 0;
    const done = sinon.spy();

    unless(isEven(3), done);

    expect(done).to.have.been.calledOnce;
  });

  it('should accept a third parameter to run when condition is false', () => {
    const done = sinon.spy();

    unless(1 < 2, () => {}, done);

    expect(done).to.have.been.calledOnce;
  });

  it('should work with other functions like `forEach`', () => {
    const isOdd = number => !(number % 2);
    const done = sinon.spy();

    forEach([1, 2, 3], number => {
      unless(isOdd(number), done);
    });

    expect(done).to.have.been.callCount(2);
  });
});
