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
    const withEmptyPredicate = unless();

    expect(() => { withEmptyPredicate(); }).to.throw('Invalid: You should provide two parameters (predicate, function).');
  });

  it('should callback have been called when first param is an expression', () => {
    const done = sinon.spy();
    const withPredicateAsExpression = unless(1 > 2);

    withPredicateAsExpression(done);

    expect(done).to.have.been.calledOnce;
  });

  it('should accept a function in first parameter', () => {
    const isEven = number => number % 2 === 0;
    const done = sinon.spy();

    const isNotEven = unless(isEven(3));
    isNotEven(done);

    expect(done).to.have.been.calledOnce;
  });

  it('should accept a third parameter to run when condition is false', () => {
    const done = sinon.spy();
    const oneGreaterThanTwo = unless(1 < 2);

    oneGreaterThanTwo(() => {}, done);

    expect(done).to.have.been.calledOnce;
  });

  it('should run “twice” looking for spaces in [1, “”, “”]', () => {
    const done = sinon.spy();

    forEach([1, '', ''], number => {
      const anEmptySpace = unless(number);

      anEmptySpace(done);
    });

    expect(done).to.have.been.callCount(2);
  });

  it('should work with other functions like `forEach`', () => {
    const isLetter = char => typeof char !== 'number';
    const done = sinon.spy();

    forEach([1, 'a', 2, 'b', '3', 3, 4], char => {
      const onlyNumbers = unless(isLetter(char));

      onlyNumbers(done);
    });

    expect(done).to.have.been.callCount(4);
  });
});
