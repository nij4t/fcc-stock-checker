const quote = require("stock-quote");

function StockHandler() {
  this.getStockData = requset => {
    if (typeof requset === "string") {
      return _getSingleStock(requset.toUpperCase());
    } else return _getMultipleStocks(request);
  };

  _getSingleStock = symbol => {
    return quote
      .getQuote(symbol)
      .then(data => {
        return { stock: data.symbol, price: data.currentPrice };
      })
      .catch(err => err);
  };

  _getMultipleStocks = symbols => {
    return quote
      .getQuote(...symbols.map(_ => _.toUpperCase()))
      .then(data =>
        data.map(_ => {
          console.log(_)
          return { stock: _.symbol, price: _.currentPrice };
        })
      )
      .catch(err => err);
  };
}

module.exports = StockHandler;
