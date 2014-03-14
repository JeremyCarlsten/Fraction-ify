/* Author: Jeremy Carlsten
 * Author URI: www.jeremycarlsten.com
 * Source: https://github.com/JeremyCarlsten/Fraction-ify
 * Version: 1.0
 * Licence: MIT
 */

$.fn.fractionify = function () {
    if (this.length === 0) {
        console.log("none found");
    }
    return this.each(function () {
        this.value = getFraction(this.value);
    });
};

function getFraction(number) {
    number = number * 100;
    var fractionList = simplifyFraction(number, 100);
    var fraction = fractionList[0] + "/" + fractionList[1];
    return fraction;
}

function simplifyFraction(numerator, denominator) {

    greatestCommonFactor = calculateGreatestCommonFactor(numerator, denominator);

    return [numerator / greatestCommonFactor, denominator / greatestCommonFactor];
}

function calculateGreatestCommonFactor(a, b) {
    if (b) {
        if((parseInt(b) === 1)){
            return 1;
        }else{
            return calculateGreatestCommonFactor(b, a % b);
        }
    } else {
        return a;
    }
}