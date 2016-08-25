import Ember from 'ember';

export default Ember.Service.extend({
  items:[],
  cartCost: 0,
  add(item) {
    this.get('items').pushObject(item);
  },

  remove(item) {
    this.get('items').removeObject(item);
  },
  removeCost(item) {
    var tempCost = this.cartCost - item.get('cost');
    this.set("cartCost", tempCost);
  },
  addCost(item) {
    this.cartCost += item.get('cost');
  },
});
