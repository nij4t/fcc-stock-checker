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
    stockHandler
      .getStockData(req.query.stock)
      .then(data => {
        res.json({ stockData: data });
      })
      .catch(err => {
        res.json(err);
      });
  });
};
