test("Test set value on object", function () {
    var $decimal = ".25";
    var $expected_fraction = "1/4";

    var $fixture = $("#qunit-fixture");
    var $fractionify = $(".fractionify");

    $fractionify.val($decimal);

    $fractionify.fractionify();

    deepEqual($fractionify.val(), "1/4");

});
test("Test HappyPath calculations", function () {
    deepEqual(getFraction(.25), "1/4");
    deepEqual(getFraction(.5), "1/2");
    deepEqual(getFraction(.0625), "1/16");

});


test("Happy Path tiny numerator To Fraction", function () {
    deepEqual(getFraction(.123456789), 1);
    deepEqual(getFraction(.000000009), 1);
    deepEqual(getFraction(.9999999999), 1);
});