import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
const extractTextFromWebpage = async (url)=>{
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const textContent = await page.evaluate(()=>{
        return document.body.innerText;
    });
    await browser.close();  
    return textContent;

}
export {extractTextFromWebpage}
