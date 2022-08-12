const { expect } = require("chai");
const sinon = require("sinon");
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./4-payment')

describe('Test sendPaymentRequestToApi with stub', function() {
    it('should ensure math is the same', function() {
        const stubUtils = sinon.stub(Utils, 'calculateNumber');
        stubUtils.returns(10);
        const spyConsole = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(spyUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;

        spyUtils.restore();
        spyConsole.restore();
    });
});
