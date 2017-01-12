'use strict';

const rampNum = require('../jan12.js');
const expect = require('chai').expect;

describe('tests to see if number is ramped', function(){
  it('returns true if number is ramped', function(){
    expect(rampNum(1234)).to.equal(true);
  });
  it('returns false if number is not ramped', function(){
    expect(rampNum(5432)).to.equal(false);
  });
  it('returns false if NaN is passed in', function(){
    expect(rampNum('hello')).to.equal(false);
    expect(rampNum([1,2,3,4])).to.equal(false);
  });
});
