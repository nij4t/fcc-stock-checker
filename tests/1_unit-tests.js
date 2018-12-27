/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

var chai = require("chai");
const assert = chai.assert;
var StockHandler = require("../controllers/stockHandler.js");

var stockPrices = new StockHandler();

suite("Unit Tests", function() {
  // test("getStockData(symbol) return data", () => {
  //   stockPrices.getStockData("googl").then(data => {
  //     assert.isNotNull(data);
  //     assert.fail()
  //     // assert.equal(data.stock, "GOOGL");
  //     // assert.isNumber(data.price);
  //   })

  // });
  // test("getStockData(symbol) multiple sybmols", () => {
  //   stockPrices.getStockData(["googl", "msft"]).then(data => {
  //     assert.isNotNull(data);
  //     assert.isArray(data);
  //     // assert.equal(data.stock, "GOOGL");
  //     // assert.isNumber(data.price);
  //   });
  // });
  // test("getStockData(symbol) invalid symbol", () => {
  //   stockPrices.getStockData("moogl").catch(err => {
  //     assert.isNotNull(err);
  //   });
  // });
});
