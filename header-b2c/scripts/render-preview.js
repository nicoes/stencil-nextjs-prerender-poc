const hydrate = require('../hydrate')
const fs = require('fs')
const cheerio = require('cheerio')

const htmlBody = `<my-component></my-component>`;

(async () => {
  const results = await hydrate.renderToString(htmlBody);
  const $ = cheerio.load(results.html);
  const component = $('my-component').html();
  console.log(component)
})()
