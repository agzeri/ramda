import { expect } from 'chai';
import author from '../src/index';

describe('ramdish.', () => {
  it('Publish and writen by Mr. R.', () => {
    const actual = 'Mr. R.';
    const expected = 'Mr. R.';

    expect(actual).to.equal(expected);
  });
});
