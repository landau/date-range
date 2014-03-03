/* jshint expr:true */
/* jshint unused:false */
'use strict';

var range = require('./');
var should = require('should');

function setTime(d, v) {
  v = v || 0;
  ['Hours', 'Minutes', 'Seconds', 'Milliseconds'].forEach(function (m) {
    d['set' + m](v);
  });
  return d;
}

describe('range', function () {
  var d1 = new Date();
  setTime(d1);
  var d2 = new Date(d1 - (range.DAY * 2)); // - 2 days

  it('should throw an error if start or end is not a date', function() {

    var errs = [];

    try {
      range(d2, 'foo');
    } catch(e) {
      errs.push(e);
    }

    try {
      range('foo', d1);
    } catch(e) {
      errs.push(e);
    }

    errs.length.should.equal(2);
    errs.every(function(v) { return v instanceof TypeError; }).should.be.true;
  });

  before(function() {
    this.dr = range(new Date(d1 - (range.DAY * 3)), d1);
  });

  it('should return an array', function() {
    this.dr.should.be.instanceof(Array);
  });

  it('should create an array of length 4', function() {
    this.dr.length.should.equal(4);
  });

  it('should step by 1 day', function() {
    this.dr.slice(1).every(function (d, i) {
      return d - this.dr[i] === range.DAY;
    }, this).should.be.true;
  });

  it('should default to new date for end', function() {
    var dr = range(d2);
    dr.length.should.equal(4);
  });

  it('should work with multiple step types', function() {
    ['MS', 'SEC', 'MIN', 'HOUR', 'DAY'].forEach(function(m) {
      var d = new Date(d1 - (range[m] * 5));
      var dr = range(d, d1, range[m]);
      dr.length.should.equal(6);
    });
  });
});
