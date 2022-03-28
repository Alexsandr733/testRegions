const $ = require('jquery')

export function readValue(value) {
  return $(value).val();
}

export function getCities(value) {
  let cities = []
  $.ajax({
    url: 'https://raw.githubusercontent.com/cscart/apply-for-job/master/frontend/developer/files/rate-areas.json',         /* Куда пойдет запрос */
    method: 'get',
    dataType: 'json',
    async: false,
    data: { text: 'Текст' },
    success: (data)=> {
      cities = data.slice()
    }
  });
  return cities
}


export function findMatches(cities, cityValue){
  let matches = []
  if (cityValue !== "") {
    cities.forEach((city, i) => {
      const cityPattern = "(^|\\s)" + cityValue;
      const regex = new RegExp(cityPattern, "ig");
      if (regex.test(city.name)) {
        matches.push(city)
      }
    });
  }
  
  return matches
}
