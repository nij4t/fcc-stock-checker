/*
 *
 *
 *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]-----
 *       (if additional are added, keep them at the very end!)
 */

var chaiHttp = require("chai-http");
var chai = require("chai");
var assert = chai.assert;
var server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function() {
  suite("GET /api/stock-prices => stockData object", function() {
    test("1 stock", function(done) {
      chai
        .request(server)
        .get("/api/stock-prices")
        .query({ stock: "googl" })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, "stockData");
          assert.equal(res.body.stockData.stock, "GOOGL");
          assert.isNumber(res.body.stockData.price);
          done();
        });
    });

    test('1 stock with like', function(done) {
      chai.request(server)
      .get('/api/stock-prices')
      .query({ stock: 'msft', like: true })
      .end(function(err, res){
        assert.equal(res.status, 200)
        assert.property(res.body, 'stockData')
        assert.equal(res.body.stockData.stock, 'MSFT')
        assert.isNumber(res.body.stockData.price)
        assert.equal(res.body.stockData.likes, 1)
        done();
      });
    });

    // test('1 stock with like again (ensure likes arent double counted)', function(done) {
    //   done();
    // });

    test('2 stocks', function(done) {
      chai.request(server)
      .get('/api/stock-prices')
      .query({stock: ['googl', 'msft']})
      .end(function(err, res){
        assert.equal(res.status, 200)
        assert.property(res.body, 'stockData')
        assert.isArray(res.body.stockData)
        assert.equal(res.body.stockData[0].stock, 'GOOGL')
        assert.isNumber(res.body.stockData[0].price)
        done();
      });
    });

    // test('2 stocks with like', function(done) {

    // });
  });
});
