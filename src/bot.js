const puppeteer = require('puppeteer');

const Bot = {
  async visitShow() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/show');
    console.log('Bot has visited /show route');
    await browser.close();
  }
};

module.exports = Bot;
