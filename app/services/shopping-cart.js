import Ember from 'ember';

export default Ember.Service.extend({
  items:[],
  cartCost: 0,
  add(item) {
    this.get('items').pushObject(item);
  },
  addCost(item) {
    this.cartCost += item.get('cost');
  }
});
