import * as $ from 'jquery';
import { getCities, readValue, findMatches } from "./script.js";

window.onload = function (e) {
  const $ = require('jquery')
  var scene = undefined, main = undefined
  scene = $.find(".scene");

  this.cities = getCities();
  
  this.list = $('.search__list');
  this.regions = document.querySelector('.search__list_template');

  $('.search__line__input').keyup( () => {
    
    let regionInput = readValue('.search__line__input');
    let matches = findMatches(this.cities, regionInput);

    let line = this.regions.content.querySelector('.search__list_line');

    this.list.empty()
    matches.forEach((region, i) => {
      let cityName = this.regions.content.querySelector('.search__list_regions__name');
      cityName.textContent = region.name
      let option = this.regions.content.cloneNode(true);
      $(line).data("id", region.id)

      this.list.append(option)
    });

  });



// button.on("click", function(){
//   banner.addClass("alt")
// })

}
