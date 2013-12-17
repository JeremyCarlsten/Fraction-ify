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
    deepEqual(getFraction(.25), "1/4", "Calculate 1/4th");
    deepEqual(getFraction(.5), "1/2", "Calculate 1/2");
    deepEqual(getFraction(.0625), "1/16", "Calculate 1/16th");
    deepEqual(getFraction(.123456789), "12.3456789/100", "Calculate long decimal '.123456789'");
    deepEqual(getFraction(.9999999999), "99.99999998999999/100", "Calculate almost 1");
    deepEqual(getFraction(.000000009), "9e-7/100", "Calculate very small decimal '.000000009'");
    deepEqual(getFraction(1.5), "3/2", "Calculate greater than one decimal '1.5'")
});