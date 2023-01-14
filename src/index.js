module.exports = function toReadable (number) {
    if (number < 10)
        return lessThanTen(number);

    if (number < 20)
        return lessThanTwenty(number);

    if (number < 100)
        return lessThanHundred(number);

    if (number < 1000) {
        return lessThanThousand(number);
    }
}

function lessThanTen (n) {
    var digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return digits[n % 10];
}

function lessThanTwenty (n) {
    var firstTens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
        'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    return firstTens[n % 100 - 10];
}

function lessThanHundred (n) {
    var secondTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var preLastDigit = Math.floor((n % 100) / 10);
    var lastDigit = Math.floor(n % 10);
    if (preLastDigit === 0)
        return lessThanTen(n);
    if (preLastDigit === 1)
        return lessThanTwenty(n);
    if (lastDigit === 0)
        return secondTens[preLastDigit];
    return secondTens[preLastDigit] + ' ' + lessThanTen(n);
}

function lessThanThousand (n) {
    if (n % 100 === 0)
        return lessThanTen(Math.floor(n / 100)) + ' hundred';
    return lessThanTen(Math.floor(n / 100)) + ' hundred ' + lessThanHundred(n);
}