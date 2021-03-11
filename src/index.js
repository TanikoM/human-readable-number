module.exports = function toReadable (number) {
    const numZeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const numTwentyToNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number < 20) return numZeroToNineteen[number]
    if (number < 100) {
        return numTwentyToNinety[Math.floor(number / 10)] + ((number % 10) ? ` ${numZeroToNineteen[(number % 10)]}` : `` );
    }
    if (number < 1000) {
        return numZeroToNineteen[Math.floor(number / 100)] + ' hundred' + (number % 100 === 0 ? '' : ' ' + toReadable(number % 100))
    }
}


// toReadable(1); // Will return 'one'
// toReadable(997); //will return 'nine hundred ninety seven'
