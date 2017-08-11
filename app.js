/* global angular */
(function () {
  angular.module('superApp', [])
  .controller('SupersController', [SupersController])

  function SupersController () {
    const vm = this
    vm.heroes = [
      {name: 'Superman', phonenumber: '555-1234', comics_affiliation: 'DC', img_url: 'https://hankweisingerphd.com/wp-content/uploads/2016/01/Superman1.jpg'},
      {name: 'Batman', phonenumber: '696-6969', comics_affiliation: 'DC', img_url: 'https://hankweisingerphd.com/wp-content/uploads/2016/01/Superman1.jpg'},
      {name: 'Wolverine', phonenumber: '111-2222', comics_affiliation: 'Marvel', img_url: 'https://hankweisingerphd.com/wp-content/uploads/2016/01/Superman1.jpg'},
      {name: 'The NY City Firemen and women', phonenumber: '237-4832', comics_affiliation: 'NY', img_url: 'https://hankweisingerphd.com/wp-content/uploads/2016/01/Superman1.jpg'}
    ]
  }
})()
