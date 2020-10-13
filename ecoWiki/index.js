const { chromium } = require('playwright');
const jsdom = require('jsdom');

const trim = dom => {
  if(dom)
  {
    return dom.toString().trim()
  }
  return ''
}

const toItem = raw =>{
  if(!raw) return ''
  const splitted = trim(raw).split('x')

  if(!Array.isArray(splitted)) return ''

  const quantity = splitted.slice(-1).pop()
  const itemAsArray = splitted.filter(x => x !== quantity)

  return {
    item: itemAsArray.join(),
    quantity
  }
}

(async () => {
 
  const headless = true;

  const browser = await chromium.launch({headless})
  const page = await browser.newPage()
  await page.goto('https://wiki.play.eco/en/Crafting')
  const raw = await page.$$(`table`)

  const promises = raw.map(async x => await x.innerHTML());
  // const test = tableRows.filter(x => x.includes('Crafting Station'))
  
  const tableRows = await Promise.all(promises)

  const craftingTabelDom = tableRows.filter(x => x.includes('Crafting Station')).map(x => { 
    return new jsdom.JSDOM(`<!DOCTYPE html><table>${x.toString()}</table>`)
  });

  const craftingTabelRawStrings = craftingTabelDom.map(x => Array.from(x.window.document.querySelectorAll('tbody > tr')).map(y => Array.from(y.querySelectorAll('td')).map(z => z.textContent)))

  console.log("craftingTabelRawStrings", craftingTabelRawStrings[1]);
  

  const craftingTabel = craftingTabelRawStrings.map(x =>x.map(y => {return{
    craftingStation: trim(y[0]),
    item: toItem(y[1]),
    materials: toItem(y[2]),
    levelNeeded: trim(y[3]),
    craftingTime: trim(y[4]),
    laborCost:trim(y[5]),
    ypGain: trim(y[6])
  }}))

  console.log('tableRows', craftingTabel[1]);
  

  await browser.close();  
})();