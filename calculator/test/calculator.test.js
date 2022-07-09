const chai = require("chai")
const calculator = require("../calculator")

const should = chai.should()
const assert = chai.assert
const expect = chai.expect

describe("TDD calculator operations", () => {
    it("Shoul sum two values", () => {
        assert.equal(calculator.addition(5,5), 10) // using assert
        calculator.addition(2,2).should.be.equal(4) // using should
        expect(calculator.addition(3,3)).to.be.equal(6) // using expect
    })
    it("Shoul subtract two values", () => {
        assert.equal(calculator.subtraction(10,5), 5)
        calculator.subtraction(4,2).should.be.equal(2)
        expect(calculator.subtraction(5,2)).to.be.equal(3)
    })
    it("Shoul multiply two values", () => {
        assert.equal(calculator.multiplication(5,5), 25)
        calculator.multiplication(3,3).should.be.equal(9)
        expect(calculator.multiplication(4,4)).to.be.equal(16)
    })
    it("Shoul divide two values", () => {
        assert.equal(calculator.division(15,5), 3)
        calculator.division(8,2).should.be.equal(4)
        expect(calculator.division(10,2)).to.be.equal(5)
    })
})