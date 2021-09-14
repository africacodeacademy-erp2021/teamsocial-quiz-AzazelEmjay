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

scrapeProduct('https://giphy.com/explore/celebration');