test("Happy Path decimal to fraction", function () {
    var $decimal = ".25";
    var $expected_fraction = "1/4";

    var $fixture = $("#qunit-fixture");
    var $fractionify = $(".fractionify");

    $fractionify.val($decimal);

    $fractionify.fractionify();

    equal($fractionify.val(), "1/4", "Test Passed.");

});

test("Happy Path large Decimal To Fraction", function () {
    var $decimal = "00.123456789";
    var $expected_fraction = "123456789/1000000000";

    var $fixture = $("#qunit-fixture");
    var $fractionify = $(".fractionify");

    $fractionify.fractionify();

    equal($fractionify.val(), "1/4", "Test Passed.");

});


test("Test Tiny Fraction Validation", function () {
    var $decimal = ".0000025";

    var $fixture = $("#qunit-fixture");
    var $fractionify = $(".fractionify");

    $fractionify.val($decimal);

    $fractionify.fractionify();

    equal($fractionify.val(), "Sorry, that is not a valid decimal", "Test Passed (with a failure!)");

});