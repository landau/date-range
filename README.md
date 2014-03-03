date-range
==========

Generate a range of dates

## Install

`npm i --save date-range`

## Usage

```javascript
var range = require('date-range');

var end = new Date();
end.setHours(0); end.setMinutes(0); end.setSeconds(0); end.setMilliseconds(0);
var start = new Date(end - (range.DAY * 5));

console.log(range(start, end));
/*
[ Wed Feb 26 2014 00:00:00 GMT-0500 (EST),
  Thu Feb 27 2014 00:00:00 GMT-0500 (EST),
  Fri Feb 28 2014 00:00:00 GMT-0500 (EST),
  Sat Mar 01 2014 00:00:00 GMT-0500 (EST),
  Sun Mar 02 2014 00:00:00 GMT-0500 (EST),
  Mon Mar 03 2014 00:00:00 GMT-0500 (EST) ]
*/

```
## Author
[Trevor Landau](http://trevorlandau.net)

## Contributing
- Suggestions welcome!
- Write new tests for new functionality or changes.
- Ensure tests pass.
- Ping me on [twitter](http://twitter.com/trevor_landau) if I take too long to respond! That probably means I missed the alert/email.
