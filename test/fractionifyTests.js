test("Test set value on object", function () {
    var $decimal = ".25";
    var $expected_fraction = "1/4";

    var $fixture = $("#qunit-fixture");
    var $fractionify = $(".fractionify");

    $fractionify.val($decimal);

    $fractionify.fractionify();

    deepEqual($fractionify.val(), "1/4", "Fraction set on object's value");

});

test("Test HappyPath calculations", function () {
    deepEqual(getFraction(0.25), "1/4", "Calculate 1/4th");
    deepEqual(getFraction(0.5), "1/2", "Calculate 1/2");
    deepEqual(getFraction(0.0625), "1/16", "Calculate 1/16th");
    deepEqual(getFraction(0.123456789), "12.3456789/100", "Calculate long decimal '.123456789'");
    deepEqual(getFraction(0.9999999999), "99.99999998999999/100", "Calculate almost 1");
    deepEqual(getFraction(0.000000009), "9e-7/100", "Calculate very small decimal '.000000009'");
    deepEqual(getFraction(1.5), "3/2", "Calculate greater than one decimal '1.5'");
});


test("Test greatest common denominator happyPath", function () {
    deepEqual(calculateGreatestCommonFactor(25,100), 25, '25/100');
    deepEqual(calculateGreatestCommonFactor(6.25,100), 6.25, "6.25/100");
    deepEqual(calculateGreatestCommonFactor(123456,100), 4, "123456/100");
    deepEqual(calculateGreatestCommonFactor(95,100), 5, "95/100");
});

test("Test no greatestCommon Factor", function () {
    deepEqual(calculateGreatestCommonFactor(1.23456,100), 1, "large number without a GCF");
    deepEqual(calculateGreatestCommonFactor(1.789456,100), 1,"large number without a GCF");
    deepEqual(calculateGreatestCommonFactor(0.23456,100), 1,"small number without a GCF 1");
    deepEqual(calculateGreatestCommonFactor(0.123456,100), 1,"small number without a GCF 2");
    deepEqual(calculateGreatestCommonFactor(0.123456789,100), 1, "small number without a GCF 3");
});
