var assert = require("assert");
var chai = require("chai");
var primeMinisters = require("../index");

describe("Testing for get prime ministers functionality", function() {
  it("user should get all uganda prime ministers", function() {
    const f = primeMinisters.getPrimeMinisters();
    chai.assert.typeOf(primeMinisters.getPrimeMinisters(), "Array");
  });
  
  it(`user should get prime minister's bithDay`, function() {
    assert.equal(
      primeMinisters.getPrimeMinister("Milton Obote").birthDay,
      "28 December 1925"
    );
  });
});
