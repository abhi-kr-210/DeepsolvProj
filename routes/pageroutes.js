import express from 'express';
import {getPageDetails,scrapeAndSavePage} from '../controller/pagecontroller.js';
const router=express.Router();
router.get('/:username',getPageDetails);
router.post('/scrape/:username',scrapeAndSavePage);
export default router;