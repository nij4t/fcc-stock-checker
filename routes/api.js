/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

var expect = require("chai").expect;
var MongoClient = require("mongodb");

const StockHandler = require("../controllers/stockHandler.js");

const CONNECTION_STRING = process.env.DB; //MongoClient.connect(CONNECTION_STRING, function(err, db) {});

module.exports = function(app) {
  const stockHandler = new StockHandler();

  app.route("/api/stock-prices").get(function(req, res) {
    const result = { stockData: {} };

    if (req.query.like) result.stockData = { likes: 1 }

    stockHandler.getStockData(req.query.stock).then(data => {
      result.stockData = Object.assign(result.stockData, data);
      res.json(result);
    });
  });
};
