
test("Test greatest common denominator happyPath", function () {
    deepEqual(calculateGreatestCommonFactor(25,100), 25);
    deepEqual(calculateGreatestCommonFactor(6.25,100), 6.25);
    deepEqual(calculateGreatestCommonFactor(123456,100), 4);
    deepEqual(calculateGreatestCommonFactor(95,100), 5);
});

test("Test no greatestCommon Factor", function () {
    deepEqual(calculateGreatestCommonFactor(1.23456,100), 1);
    deepEqual(calculateGreatestCommonFactor(1.789456,100), 1);
    deepEqual(calculateGreatestCommonFactor(0.23456,100), 1);
    deepEqual(calculateGreatestCommonFactor(0.123456,100), 1);
    deepEqual(calculateGreatestCommonFactor(0.123456789,100), 1);
});



