const hydrate = require('../hydrate')
const fs = require('fs')
const cheerio = require('cheerio')

const componentTags = [
  'my-component',
  'footer-b2c',
  'modal-window',
  'nvb-header-b2c'
]

async function getPrerenderedComponent(tag) {
  const htmlBody = `<${tag} />`;
  const results = await hydrate.renderToString(htmlBody);
  const $ = cheerio.load(results.html);
  return {
    tag,
    classNames: $(tag).attr('class'),
    html: $(tag).html(),
    style: $('style').html(),
    prettyPrint: true
  };
}

(async () => {
  const results = await Promise.all(componentTags.map(tag => getPrerenderedComponent(tag)))
  results.forEach(({ tag, html, style, classNames }) => {
    console.log('\x1b[36m%s\x1b[0m', `Result: ${tag}`)
    console.log('\x1b[33m%s\x1b[0m', `Html`)
    console.log(`${html}`)
    console.log('\x1b[33m%s\x1b[0m', `Class names`)
    console.log(`${classNames}`)
    console.log('\x1b[33m%s\x1b[0m', `Style`)
    console.log(`${style}\n`)
  })

})()
