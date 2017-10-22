const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../../db')

const urlAddress = 'https://sfbay.craigslist.org/search/cto?hasPic=1&min_price=2500&max_price=6000&min_auto_year=2005&auto_title_status=1';

const getCraigslistFeed = (req, res) => {
  axios.get(urlAddress)
    .then(result => {

      const $ = cheerio.load(result.data);
      const carList = [];
      $('.result-row').each(function(index, element){
        carList[index] = {};
        let resultImage = $(element).find('.result-image');
        carList[index]['pid'] = $(this).attr('data-pid');
        carList[index]['href'] = $(resultImage).attr('href')
        carList[index]['images'] = $(resultImage).attr('data-ids');
        let price = $(element).find('.result-meta .result-price');
        carList[index]['price'] = $(price).text();
        let dateTime = $(element).find('.result-date');
        carList[index]['dateTime'] = $(dateTime).attr('datetime');
        let title = $(element).find('.result-title');
        carList[index]['title'] = $(title).text()
        let neighborhood = $(element).find('.result-hood');
        let neighborhoodCleanText = $(neighborhood).text().substring(2, $(neighborhood).text().length - 1);
        carList[index]['neighborhood'] = neighborhoodCleanText;
        carList[index]['show'] = true;
      })
      return carList;

    })
    .then(sortedData => {

      sortedData.map((item, i) => {
        let { pid, title, href, images, price, neighborhood, dateTime, show } = item;

        db.raw(
          'INSERT INTO car_listing (pid, title, href, images, price, neighborhood, "dateTime", show) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT DO NOTHING', 
          [pid, title, href, images, price, neighborhood, dateTime, show ]
        ).catch(err => console.log('Error! in db.raw - craigslist.js =>', err))

      })
      return [];

    })
    .then(placeholderValue => {

      db('car_listing').select()
        .then(carList => res.send(carList))  
        .catch(err => console.log('Error! in - db car_listing select - craigslist.js =>', err))

    })
    .catch(err => console.log('Error! in axios / get urlAddress - craigslist.js =>', err))
}

module.exports.getCraigslistFeed = getCraigslistFeed;
