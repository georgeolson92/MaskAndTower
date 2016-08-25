import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    addToCart(item) {

      item.incrementProperty("cartQuantity");
      this.get('shoppingCart').addCost(item);
      if(item.get("cartQuantity") <= 1)
      {
        this.get('shoppingCart').add(item);
      }
    }
  }
});
