import { expect } from 'chai';
import forEach from '../src/forEach';

describe('forEach :: High Order Function', () => {
  it('should be a function', () => {
    expect(forEach).to.be.a('function');
  });

  it('should iterate over each item', () => {
    let iterations = 0;
    const list = [1, 2, 3, 4];

    forEach(list, () => {
      iterations++;
    });

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
