(function(window) {
  'use strict'

  //eval(require('fs').readFileSync('tests/truck.js', 'utf-8'));
  //eval(require('fs').readFileSync('tests/datastore.js', 'utf-8'));

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;

  //eval(require('fs').readFileSync('tests/truck.js', 'utf-8'));
  //eval(require('fs').readFileSync('tests/datastore.js', 'utf-8'));

})(window);
