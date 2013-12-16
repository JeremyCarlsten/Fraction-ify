/* Author: Jeremy Carlsten
 * Author URI: www.jeremycarlsten.com
 * Source: https://github.com/JeremyCarlsten/Fraction-ify
 * Version: 1.0
 * Licence: MIT (2014)
 */

$.fn.fractionify = function () {
    if (this.length == 0) {
        console.log("none found");
    }
    return this.each(function () {
        this.value = getFractionValue(this.value);
    });
}

getFractionValue = function (number) {
    number = number * 100
    var fractionList = simplifyFraction(number, 100);
    var fraction = fractionList[0] + "/" + fractionList[1];
    return fraction;
}

simplifyFraction = function (numerator, denominator) {
    var gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    };
    commondenom = gcd(numerator, denominator);

    return [numerator / commondenom, denominator / commondenom]
}
