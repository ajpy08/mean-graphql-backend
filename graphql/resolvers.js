const Quote = require('../models/quote');

module.exports = {
  quotes: async () => {
    const quotes = await Quote.find();
    return {
      quotes: quotes.map((q) => {
        return {
          ...q._doc,
          _id: q._id.toString(),
        }
      })
    }
  },
  createQuote: async ({ quoteInput }) => {
    const quote = new Quote({
      quote: quoteInput.quote,
      author: quoteInput.author
    })
    const createdQuote = await quote.save();
    return {
      ...createdQuote._doc,
      _id: createdQuote._id.toString(),
    }
  }
}