import axios from 'axios';

module.exports = (movie) => {
  let api_key = '1a18ddb3'
  let api_url = `http://www.omdbapi.com/?apikey=${api_key}&t=${movie}`
  return axios.get(api_url, {
	headers: {
		'content-type': 'application/json',
		'accept': 'application/json'
	}
  }).then((results) => {
  	return results
  });
}