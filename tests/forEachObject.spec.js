import { expect } from 'chai';
import forEachObject from '../src/forEachObject';

describe('forEachObject :: High Order Function', () => {
  it('should be a function', () => {
    expect(forEachObject).to.be.a('function');
  });

  it('should throw an error if first parameter is not provided', () => {
    expect(() => { forEachObject() }).to.throw('Invalid: You should provide two parameters (object, function).');
  });

  it('should throw an error if first parameter is provided and is not an object', () => {
    expect(() => { forEachObject("Not an object.") }).to.throw('Invalid: You should provide two parameters (object, function).')
  });

  it('should throw an error if first parameter is correctly provided, but not the second', () => {
    expect(() => { forEachObject({}) }).to.throw('Invalid: You should provide two parameters (object, function).');
  });

  it('should throw an error if second parameter is not provided', () => {
    expect(() => { forEachObject({}, "Not a function.") }).to.throw('Invalid: You should provide two parameters (object, function).');
  });

  it('should not throw an error if both parameters are provided with the correct data type', () => {
    expect(() => { forEachObject({}, () => {}) }).to.not.throw();
  });

  it('should append each key from object as element in array', () => {
    const criteria = {
      name: 'Mr. R',
      age: 21,
      genius: true
    };

    const keys = [];

    const extractKeys = (prop, value) => {
      keys.push(prop);
    };

    forEachObject(criteria, extractKeys);

    expect(keys).to.be.an('array');
    expect(keys).to.include('name', 'age', 'genius');
  });

  it('should throw an error when criteria object has undefined values', () => {
    const criteria = {
      undefined: undefined
    };

    const keys = [];

    const extractKeys = (prop, value) => {
      keys.push(prop);
    };

    expect(() => { forEachObject(criteria, extractKeys); }).to.throw();
  });
});
