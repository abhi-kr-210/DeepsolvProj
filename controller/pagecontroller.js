import Page from '../models/page.js';
import scrapeFacebookPage from '../services/scrapper.js';
export const getPageDetails=async(req,res)=>{
try{
const page=await Page.findOne({username:req.params.username}).populate('posts').populate('followers').populate('following');
    if(!page)return res.status(404).json({message:'Page not found'});
    res.json(page);
    }
catch(err){
    res.status(500).json({message:err.message});
}
};
export const scrapeAndSavePage=async(req,res)=>{
try{
    const data=await scrapeFacebookPage(req.params.username);
    const page=new Page(data);
    await page.save();
    res.json(page);
}
catch(err){
res.status(500).json({message:err.message});
}
};