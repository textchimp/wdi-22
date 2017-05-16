//
// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numChildren = 8;
var partnerName = 'Craigsy';
var geographicLocation = 'Glasgow';
var jobTitle = 'chimney sweep';

var fortune = 'You will be a ' + jobTitle +
              ' in ' + geographicLocation +
              ', and married to ' + partnerName +
              ' with ' + numChildren + ' kids';

console.log( fortune );
