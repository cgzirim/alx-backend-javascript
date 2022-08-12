const chai = require('chai')
const expect = chai.expect
const calculateNumber = require('./1-calcul');

describe("calculateNumber function:", function() {
    describe("Tests SUM:", function() {
        it('Returns 6.', function() {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe("Tests SUBTRACT:", function() {
        it("Returns -4", function() {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe("Tests DIVIDE:", function() {
        it("Returns 0.2", function() {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });
    });

    describe("Tests DIVIDE with zero:", function() {
        it("returns Error", function() {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });
});
