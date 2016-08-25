import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    removeFromCart(item) {
      item.decrementProperty("cartQuantity");
      this.get('shoppingCart').removeCost(item);
      if(item.get("cartQuantity") < 1)
      {
      this.get('shoppingCart').remove(item);
      }

    }
  }
});
