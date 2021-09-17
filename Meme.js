const winner = require('website-scraper');
const Lose = require('website-scraper');
winner({
   urls: ['https://www.pinclipart.com/maxpin/TobwwR/'],
   directory: 'emoji_happy',
   sources:[
             {selector: 'img', attr: 'src', id: 'img01' }
   ]
});

Lose({
    urls: ['https://www.licensingcorner.com/2017/04/27/jack-licensing-programme-emoji-movie/'],
    directory: 'emoji_sad',
    sources:[
              {selector: 'img',  attr: 'src' }
    ]
 });