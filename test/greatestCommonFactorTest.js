
test("Test greatest common denominator happyPath", function () {
    deepEqual(calculateGreatestCommonFactor(25,100), 25, '25/100');
    deepEqual(calculateGreatestCommonFactor(6.25,100), 6.25, "6.25/100");
    deepEqual(calculateGreatestCommonFactor(123456,100), 4, "123456/100");
    deepEqual(calculateGreatestCommonFactor(95,100), 5, "95/100");
});

test("Test no greatestCommon Factor", function () {
    deepEqual(calculateGreatestCommonFactor(1.23456,100), 1, "large number without a GCF");
    deepEqual(calculateGreatestCommonFactor(1.789456,100), 1,"large number without a GCF");
    deepEqual(calculateGreatestCommonFactor(0.23456,100), 1,"small number without a GCF");
    deepEqual(calculateGreatestCommonFactor(0.123456,100), 1,"small number without a GCF");
    deepEqual(calculateGreatestCommonFactor(0.123456789,100), 1, "small number without a GCF");
});



