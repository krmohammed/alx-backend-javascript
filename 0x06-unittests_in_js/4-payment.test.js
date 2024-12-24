const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('It should call Utils.calculateNumber with correct args', () => {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('It should log the correct message to the console', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledWithExactly('The total is: 10')).to.be.true;
  });
});
