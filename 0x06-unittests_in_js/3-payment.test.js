const { expect } = require("chai");
const sinon = require("sinon");
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment')

describe('sendPaymentRequestToApi', function() {
    it('should ensure math is the same', function() {
        const spyUtils = sinon.spy(Utils, 'calculateNumber');
        const spyConsole = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(spyUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;

        spyUtils.restore();
        spyConsole.restore();
    });
});
