const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("calculateNumber function:", function() {
    describe("Calculates two integers:", function() {
        it('Returns 4.', function() {
            assert.strictEqual(calculateNumber(1, 3), 4);
        });
    });

    describe("calculates integer and float:", function() {
        it("returns 5", function() {
            assert.strictEqual(calculateNumber(1, 3.7), 5);
        });
    });

    describe("calculates two floats w/border line:", function() {
        it("returns 6", function() {
            assert.strictEqual(calculateNumber(1.5, 3.7), 6);
        });
    });

    describe("calculates two floats:", function() {
        it("returns 5", function() {
            assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        });
    });

    describe("calculates two floats rounded down:", function() {
        it("retuns 4", function() {
            assert.strictEqual(calculateNumber(1.2, 3.1), 4);
        });
    });
});