const quote = require("stock-quote");

function StockHandler() {
  this.getStockData = request => {
    if (typeof request === "string") {
      return _getSingleStock(request.toUpperCase());
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
    const stackOfStocks = symbols.map(stock =>
      quote
        .getQuote(stock.toUpperCase())
        .then(stock => {
          return { stock: stock.symbol, price: stock.currentPrice };
        })
        .catch(err => err)
    );
    return Promise.all(stackOfStocks);
  };
}

module.exports = StockHandler;
