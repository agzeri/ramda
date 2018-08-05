import chai, { expect } from 'chai';
import sinon from 'sinon';
import sc from 'sinon-chai';

chai.use(sc);

import forEach from '../src/forEach';

describe('forEach :: High Order Function', () => {
  it('should be a function', () => {
    expect(forEach).to.be.a('function');
  });

  it('should forEach have been called', () => {
    const done = sinon.spy();

    forEach([1], done);

    expect(done).to.have.been.called;
  });

  it('should accept a list of numbers', () => {
    const theNumber = n => {};
    const done = sinon.spy(theNumber);

    forEach([1, 2], done);

    expect(done).to.have.been.calledWith(1);
  });

  it('should accept a list of strings', () => {
    const char = char => {};
    const done = sinon.spy(char);

    forEach(['m', 'r', 'r'], done);

    expect(done).to.have.been.calledWith('m');
  });

  it('should send the currently parameter to callback', () => {
    const char = char => {};
    const done = sinon.spy(char);

    forEach(['m', 'r'], done);

    expect(done).to.have.been.calledWith('m');
    expect(done).to.have.been.calledWith('r');
  });

  it('should forEach have been called exactly as list length', () => {
    const done = sinon.spy();

    forEach([1, 2, 4], done);

    expect(done).to.have.been.callCount(3);
  });

  it('should increment in each iteration', () => {
    let iterations = 0;
    const list = [1, 2, 3, 4];
    const incrementInEachIteration = () => {
      iterations++;
    };

    forEach(list, incrementInEachIteration);

    expect(iterations).to.equal(list.length);
  });

  it('should square every element in the list', () => {
    const list = [1, 2, 3, 4];
    const actual = [];
    const expected = [1, 4, 9, 16];

    const square = number => actual.push(number * number);

    forEach(list, square);

    expect(actual).to.be.an('array');
    expect(actual).to.include(9);
    expect(actual).to.deep.equal(expected);
  });
});
