const request = require('request');
const cheerio = require('cheerio');

request('https://www.nrc.nl/', (error, response, html) => {
	if (!error && response.statusCode == 200) {
		const $ = cheerio.load(html);
		
		const article = $('h3')

		console.log(article.html());
	}
});
