var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.countrystatecity.in/v1/countries',
  headers: {
    'X-CSCAPI-KEY': 'API_KEY'
  }
};

axios(config)
.then(function (response:any) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error:any) {
  console.log(error);
});