const puppeteer = require('puppeteer');
async function happy_emoji(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto(url);
    //select item inspected by xpath
    const [el] =await page.$x('/html/body/main/figure/div[1]/ul/li[2]/img');
    //get the src
    const src = await el.getProperty('src');
    const srcLink = await src.jsonValue();
    console.log({srcLink}); 
    //save link to localStorage
    localStorage.setItem("emoji",srcLink);
    await browser.close();
  };
  happy_emoji('https://www.pinclipart.com/maxpin/TobwwR/');