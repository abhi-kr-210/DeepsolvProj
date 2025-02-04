import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function scrapeFacebookPage(username){
const url=`https://www.facebook.com/${username}`;
const {data}=await axios.get(url);
const $=cheerio.load(data);
return{
username,
name:$('meta[property="og:title"]').attr('content')||'',
url,
profile_pic:$('meta[property="og:image"]').attr('content')||'',
total_followers:parseInt($('meta[name="followers"]').attr('content'))||0,
total_likes:parseInt($('meta[name="likes"]').attr('content'))||0
};
}