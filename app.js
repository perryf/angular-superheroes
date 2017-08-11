/* global angular */
(function () {
  angular.module('superApp', [])
  .controller('SupersController', [SupersController])

  function SupersController () {
    const vm = this
    vm.heroes = [
      {name: 'Superman', phonenumber: '555-1234', comics_affiliation: 'DC', img_url: 'https://hankweisingerphd.com/wp-content/uploads/2016/01/Superman1.jpg'},
      {name: 'Batman', phonenumber: '696-6969', comics_affiliation: 'DC', img_url: 'https://static.comicvine.com/uploads/scale_small/11128/111283887/5436234-9421608823-latest'},
      {name: 'Wolverine', phonenumber: '111-2222', comics_affiliation: 'Marvel', img_url: 'http://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/w/wolverine_thumb.JPG'},
      {name: 'The NY City Firemen and women', phonenumber: '237-4832', comics_affiliation: 'NY', img_url: 'http://www.oursouthbay.com/wp-content/uploads/data-import/9d/9d9e55dfe285ca8d1d21fe9085dffbf9-081513MTMFirefighterWomen-340.jpg'}
    ]
  }
})()
