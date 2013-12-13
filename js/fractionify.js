// Author: Jeremy Carlsten
// Author URI: www.jeremycarlsten.com
// Source: https://github.com/JeremyCarlsten/Fraction-ify

$.fn.fractionify = function (step) {
    step = step || .0625
    return this.each(function () {
        this.setAttribute("step", step);
        this.value = getFractionValue(this.value);
    });
}

getFractionValue = function (number) {
    number = number * 100
    var fractionList = simplifyFraction(number, 100)
    var fraction = fractionList[0] + "/" + fractionList[1]
    return fraction
}

simplifyFraction = function (numerator, denominator) {
    var gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    };
    commondenom = gcd(numerator, denominator);

    return [numerator / commondenom, denominator / commondenom]
}
