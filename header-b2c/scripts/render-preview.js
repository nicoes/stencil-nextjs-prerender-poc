const hydrate = require('../hydrate')
const fs = require('fs')
const cheerio = require('cheerio')

const componentTags = [
  'my-component',
  'footer-b2c'
]

async function getPrerenderedComponent(tag) {
  const htmlBody = `<${tag} />`;
  const results = await hydrate.renderToString(htmlBody);
  const $ = cheerio.load(results.html);
  return {
    tag,
    html: $(tag).html()
  };
}

(async () => {
  const results = await Promise.all(componentTags.map(tag => getPrerenderedComponent(tag)))
  results.forEach(({ tag, html }) => {
    console.log(`\n${tag} -- ${html}\n`)
  })
})()
