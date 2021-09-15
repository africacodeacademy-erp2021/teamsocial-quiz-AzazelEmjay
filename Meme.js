const puppeteer = require ('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [element] = page.$x('//*[@id="react-target"]/div/div[7]/div[2]/div[1]/a[14]/div/picture/img');
    const src = await element.getProperty('src');
    const srcTxt = await src.jsonValue();

     console.log(srcTxt);

    localStorage.setItem("image", srcTxt);
    browser.close();

}
async function scrapeProduct2(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [element] = page.$x('//*[@id="react-target"]/div/div[7]/div[2]/div[1]/a[14]/div/picture/img');
    const src = await element.getProperty('src');
    const srcTxt2 = await src.jsonValue();

     console.log(srcTxt2);

    localStorage.setItem("lose", srcTxt2);
    browser.close();

}

scrapeProduct('https://giphy.com/explore/celebration');
scrapeProduct2('https://giphy.com/search/lose')