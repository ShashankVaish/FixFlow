// const {extractTextFromWebpage} = require(
    // try {'../services/puppeteer/index.js');

import {extractTextFromWebpage} from '../services/puppeteer/index.js';
import cron from 'node-cron';
const extractDataController = async (req, res) => {
    try{
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ error: 'URL is required' });
        }
        const textContent = await extractTextFromWebpage(url);
        console.log(textContent)
        res.status(200).json({ text: textContent });
        await cron.schedule('* * * * *', async () => {
            const updatedTextContent = await extractTextFromWebpage(url);
            console.log('Updated content:', updatedTextContent);
            // Here you can add code to save the updated content to a database or file
        });
    } catch (error) {
        console.error('Error extracting data:', error);
        res.status(500).json({ error: 'Failed to extract data' });
    }
}   
export {extractDataController};