// Author: Jeremy Carlsten
// Author URI: www.jeremycarlsten.com
// Source: https://github.com/JeremyCarlsten/Fraction-ify

$.fn.fractionify = function (step) {
    step = step || .0625
    return this.each(function () {
        this.setAttribute("step", step);
        this.value = getFractionValue(this.value);

        console.log("called It")
    });
}
